import { Configuration, OpenAIApi } from "openai";
import slugify from "slug";
import dotenv from "dotenv";
import { data } from "./generate.mock.js";
dotenv.config();

const systemMessage = "You are a helpful assistant.";

const runGPTQuery = async ({ query }) => {
  try {
    const configuration = new Configuration({ apiKey: process.env.OPENAI_KEY });
    const openai = new OpenAIApi(configuration);
    const { data } = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      max_tokens: 300,
      messages: [
        { role: "system", content: systemMessage },
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

const saveToDatabase = async ({ slug, name, data }) => {
  console.log({ slug, name, data });
};

const generate = async ({ name }) => {
  const slug = slugify(name);
  const queries = [];
  const audiences = [
    { key: "5", token: "5 year old" },
    { key: "10", token: "10 year old" },
    { key: "adult", token: "non-technical adult" },
  ];
  const lengths = [
    { key: "extra_short", token: "15 words or less" },
    { key: "short", token: "50 words or less" },
    { key: "long", token: "about 200 words" },
  ];
  for (const audience of audiences) {
    for (const length of lengths) {
      queries.push({
        key: `${audience.key}_${length.key}`,
        query: `I am a ${audience.token}, in language that I could understand, what is ${name} in ${length.token}?`,
      });
    }
  }
  queries.push({
    key: "parent",
    query: `In three words or less, what field does ${name} belong to?`,
  });
  queries.push({
    key: "related",
    query: `Give me a bullet-point list of popular topics similar to ${name}. Each one should be no more than a word or two`,
  });

  // run all queries in parallel
  const results = await Promise.all(
    queries.map(async (query) => {
      if (query.key === "parent") {
        const parent = await runGPTQuery({ query: query.query });
        const grandparent = await runGPTQuery({
          query: `In three words or less, what field does ${parent} belong to?`,
        });
        return { ...query, result: { parent, grandparent } };
      }
      if (query.key === "related") {
        const result = await runGPTQuery({ query: query.query });
        const parsedRelated = parseRelated({ relatedBulletString: result });
        const relatedDescriptionQueries = parsedRelated
          .map((related) => {
            return audiences.map((audience, i) => {
              return {
                key: `related_${i}_${audience.key}`,
                query: `Using language a ${audience.token} could understand, what is the relationship between ${name} and ${related} in 15 words or less?`,
              };
            });
          })
          .flat();
        const relatedDescriptionResults = await Promise.all(
          relatedDescriptionQueries.map(async (query) => {
            return {
              key: query.key,
              description: await runGPTQuery({ query: query.query }),
            };
          })
        );

        return { ...query, result: relatedDescriptionResults };
      }
      const result = await runGPTQuery({ query: query.query });
      return { ...query, result };
    })
  );
  await saveToDatabase({ slug, name, data: results });
  return slug;
};

const parseRelated = ({ relatedBulletString }) => {
  const regex = /[A-Za-z](.+)/;
  return relatedBulletString
    .split("\n")
    .map((item) => regex.exec(item)?.[0])
    .slice(0, 5);
};

// if running from command line
if (process.argv.find((arg) => arg.includes("--topic"))) {
  const name = process.argv
    .find((arg) => arg.includes("--topic"))
    .split("=")[1];
  generate({ name });
  // parseRelated({
  //   relatedBulletString: data.results.find((r) => r.key === "related")?.result,
  // });
}

export default generate;
