import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";
import generate from "./generate/index.js";

dotenv.config();
const app = express();
app.use(express.json());
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

app.get("/groups", async (_, res) => {
  const endpoint = `${DB_ENDPOINT}/api/rest/groups`;
  const response = await fetch(endpoint, { method: "GET", headers });
  const topics = await response.json();
  res.send(topics);
});

const getTopic = async ({ slug, audience }) => {
  try {
    const audience = audience ? `/${slug}` : "";
    const endpoint = `${DB_ENDPOINT}/api/rest/topic/${slug}${audience}`;
    const response = await fetch(endpoint, { method: "GET", headers });
    const json = await response.json();
    const topic = json?.topic?.[0];
    if (!topic) return null;
    const isGenerated = topic?.descriptions?.length > 0;
    return { ...json, isGenerated };
  } catch (e) {
    console.log(e);
  }
};

app.get("/topic/:slug", async (req, res) => {
  const { audience } = req.query;
  const { slug } = req.params;
  const topic = await getTopic({ slug, audience });
  if (!topic) return res.status(404).send("Topic not found");
  return res.send(topic);
});

app.post("/topic", async (req, res) => {
  const { slug, data } = await generate({ name: req.body.name });
  const endpoint = `${DB_ENDPOINT}/api/rest/topic`;
  const body = JSON.stringify(data);
  await fetch(endpoint, { method: "POST", headers, body });
  const topic = await getTopic({ slug, audience });
  if (!topic) return res.status(404).send("Topic not found");
  return res.send(topic);
});

app.listen(port, () => console.log(`API listening on port ${port}`));
