import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

// TODO: See api/README for a list of required queries.
export const generateTopic = async ({ topicName }) => {
  try {
    const configuration = new Configuration({ apiKey: process.env.OPENAI_KEY });
    const openai = new OpenAIApi(configuration);
    const { data } = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      max_tokens: 300,
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
          role: "user",
          content: `In language that a ${audience} could understand, what is ${topicName} in 50 words or less?`,
        },
      ],
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};

// TODO
export const parseTopic = (data) => {
  const parsed = {
    descriptions: [],
    relationships: [],
    hierarchy: {
      parent: "?",
      grandparent: "?",
    },
  };
  return parsed;
};
