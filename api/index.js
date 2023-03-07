import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";
import { generateTopic, parseTopic } from "./openAI.js";

dotenv.config();
const app = express();
app.use(cors());

const port = 4000;
const DB_ENDPOINT = process.env.DB_ENDPOINT || "http://localhost:8080";
const DB_SECRET = process.env.DB_SECRET || "admin_secret";

const headers = {
  "Content-Type": "application/json",
  "X-Hasura-Admin-Secret": DB_SECRET,
};

app.get("/topics", async (_, res) => {
  const endpoint = `${DB_ENDPOINT}/api/rest/topics`;
  const response = await fetch(endpoint, { method: "GET", headers });
  const topics = await response.json();
  res.send(topics);
});

app.get("/topic/:slug", async (req, res) => {
  const audience = req.query.audience ? `/${req.query.audience}` : "";
  const endpoint = `${DB_ENDPOINT}/api/rest/topic/${req.params.slug}${audience}`;
  const response = await fetch(endpoint, { method: "GET", headers });
  const json = await response.json();
  const topic = json?.topic?.[0];
  if (!topic) return res.status(404).send("Topic not found");
  if (topic.descriptions?.length) return res.send(json);
  else {
    const newTopic = await generateTopic({ topicName: topic.name, audience:audience });
    const parsedTopic = parseTopic(newTopic);
    // TODO: saveToDB
    // TODO: return newly generated topic
  }
});

app.listen(port, () => console.log(`API listening on port ${port}`));
