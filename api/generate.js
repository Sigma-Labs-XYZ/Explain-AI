import { Configuration, OpenAIApi } from "openai";
import slugify from "slug";
import dotenv from "dotenv";
import { data } from "./generate.mock.js";
import fs from "fs";
import path, { dirname } from "path";
dotenv.config();

const defaultSystemMessage = "You are a helpful assistant.";
const MAX_RELATED = 5;

const runGPTQuery = async ({ query, system = "" }) => {
  try {
    const configuration = new Configuration({ apiKey: process.env.OPENAI_KEY });
    const openai = new OpenAIApi(configuration);
    const { data } = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      max_tokens: 300,
      messages: [
        { role: "system", content: `${defaultSystemMessage} ${system}` },
        {
          role: "user",
          content: query,
        },
      ],
    });
    return data?.choices?.[0]?.message?.content;
  } catch (e) {
    console.log(e);
  }
};

// 1. generate the data in the correct format (see README)
// 2. save it to the database
// 3. return the slug

const saveToDatabase = async ({ slug, name, data, result }) => {
  // console.log({ slug, name, data });

  // save data object as json file in /test directory
  fs.writeFileSync(`./test/${slug}.json`, JSON.stringify(result));

//   {"topics": [
//   {"name": "Test 1", "slug": "test_1"},
//   {"name": "Test 2", "slug": "test_2"}
// ], 
// "descriptions": [
//   {"topic_slug": "test_1", "audience": 5, "short": "test test", "extra_short": "test", "long": "test test test"}
// ],
// "relationships": [
//   {"from_slug": "test_1", "to_slug": "test_2", "description": "test", "audience": 5, "priority": 0}
// ],
//   "hierarchies": [
//     {"parent_slug": "test_1", "child_slug": "test_2"}
//   ]
// }
};

const trim = (item) =>
  item.replace(/^[^a-zA-Z0-9]*|[^a-zA-Z0-9]*$/g, "").trim();

const audiences = [
  { key: "5", token: "5 year old", request: "make it super simple" },
  { key: "10", token: "10 year old", request: "make it easy to understand" },
  {
    key: "adult",
    token: "non-technical adult",
    request: "use language I would understand",
  },
];
const lengths = [
  { key: "extra_short", token: "15 words or less" },
  { key: "short", token: "50 words or less" },
  { key: "long", token: "about 200 words" },
];

const generate = async ({ name }) => {
  const slug = slugify(name);
  const queries = [];
  for (const audience of audiences) {
    for (const length of lengths) {
      queries.push({
        type: "description",
        audience: audience.key,
        length: length.key,
        key: `${audience.key}_${length.key}`,
        system: `I am a ${audience.token}, so ${audience.request}. The length of your reply should be ${length.token}.`,
        query: `What is ${name}?`,
      });
    }
  }
  queries.push({
    key: "parent",
    type: "hierarchy",
    system:
      "Use three words or less. If there is no widely accepted answer, reply with just the word 'none'.",
    query: `What field does ${name} belong to?`,
  });
  queries.push({
    key: "related",
    type: "related",
    system:
      "Reply with a bullet-point list. Each item should be no more than a word or two in length. Do not terminate items with a period.",
    query: `What are some popular topics similar to ${name}?`,
  });

  const result = {
    descriptions: audiences.reduce((acc, audience) => {
      acc[audience.key] = lengths.reduce((acc, length) => {
        acc[length.key] = "";
        return acc;
      }, {});
      return acc;
    }, {}),
    related: {},
    hierarchy: {
      parent: { name: "", slug: "" },
      grandparent: { name: "", slug: "" },
    },
  };

  // run all queries in parallel
  const results = await Promise.all(
    queries.map(async (query) => {
      if (query.key === "parent") {
        const parent = await runGPTQuery({
          query: query.query,
          system: query.system,
        });
        const grandparent = await runGPTQuery({
          type: "hierarchy",
          system:
            "Use three words or less. If there is no widely accepted answer, reply with just the word 'none'.",
          query: `What field does ${parent} belong to?`,
        });
        result.hierarchy = {
          parent: { name: trim(parent), slug: slugify(parent) },
          grandparent: { name: trim(grandparent), slug: slugify(grandparent) },
        };
        return { ...query, result: { parent, grandparent } };
      }
      if (query.key === "related") {
        const response = await runGPTQuery({
          query: query.query,
          system: query.system,
        });
        const parsedRelated = parseRelated({ relatedBulletString: response });
        const relatedDescriptionQueries = parsedRelated
          .map((related) => {
            return audiences.map((audience, i) => {
              return {
                name: related,
                key: `related_${i}_${audience.key}`,
                audience,
                system: `I am a ${audience.token}, so use language I would understand. The length of your reply should be 15 words or less.`,
                query: `What is the relationship between ${name} and ${related}?`,
              };
            });
          })
          .flat();
        const relatedDescriptionResults = await Promise.all(
          relatedDescriptionQueries.map(async (query) => {
            const description = await runGPTQuery({
              query: query.query,
              system: query.system,
            });
            return {
              key: query.key,
              name: query.name,
              audience: query.audience.key,
              description,
            };
          })
        );

        relatedDescriptionResults.forEach((related) => {
          const slug = slugify(related.name);
          if (!result.related[slug])
            result.related[slug] = {
              name: related.name,
              slug,
              descriptions: audiences.reduce((acc, audience) => {
                acc[audience.key] = "";
                return acc;
              }, {}),
            };
          result.related[slug].descriptions[related.audience] =
            related.description;
        });

        return { ...query, result: relatedDescriptionResults };
      }
      if (query.type === "description") {
        const response = await runGPTQuery({
          query: query.query,
          system: query.system,
        });
        result.descriptions[query.audience][query.length] = response;
        return { ...query, result: response };
      }
    })
  );
  await saveToDatabase({ slug, name, data: results, result });
  return slug;
};

const parseRelated = ({ relatedBulletString }) => {
  return relatedBulletString.split("\n").map(trim).slice(0, MAX_RELATED);
};

// if running from command line
if (process.argv.find((arg) => arg.includes("--topic"))) {
  const name = process.argv
    .find((arg) => arg.includes("--topic"))
    .split("=")[1];
  generate({ name });
}

export default generate;
