import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";
import generate from "./generate.js";

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
  // Does the topic exist?
  if (!topic) return res.status(404).send("Topic not found");
  // If so, has it had descriptions generated yet?
  const isGenerated = topic?.descriptions?.length > 0;
  // (Because if not, the front end will request a POST to generate them)
  return res.send({ ...json, isGenerated });
});

app.post("/topic/:slug", async ({ params: { slug } }, res) => {
  // It wasn't generated, so generate it
  await generate({ topicName: slug });
  // Once that's done, call the GET endpoint again
  const get = `/topic/${slug}`;
  app._router.handle({ method: "GET", url: get }, res, { end: res.send });
});

app.listen(port, () => console.log(`API listening on port ${port}`));
