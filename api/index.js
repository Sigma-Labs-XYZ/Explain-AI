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

const getTopic = async ({ slug }) => {
  try {
    const endpoint = `${DB_ENDPOINT}/api/rest/topic/${slug}`;
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

const saveToDB = async ({ data }) => {
  const endpoint = `${DB_ENDPOINT}/api/rest/topic`;
  const body = JSON.stringify(data);
  await fetch(endpoint, { method: "POST", headers, body });
};

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

app.get("/topic/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
    const topic = await getTopic({ slug });
    if (!topic) throw new Error("Topic not found");
    return res.send(topic);
  } catch (e) {
    res.status(404).send(e);
  }
});

app.post("/topic", async (req, res) => {
  try {
    const { slug, data } = await generate({ name: req.body.name });
    await saveToDB({ data });
    const topic = await getTopic({ slug });
    if (!topic) throw new Error("Error generating topic");
    return res.send(topic);
  } catch (e) {
    res.status(500).send(e);
  }
});

app.listen(port, () => console.log(`API listening on port ${port}`));
