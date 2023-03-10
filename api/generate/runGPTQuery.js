// add imports
import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
dotenv.config();

const defaultSystemMessage = "You are a helpful assistant.";

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

export default runGPTQuery;
