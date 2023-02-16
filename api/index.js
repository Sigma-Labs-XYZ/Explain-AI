import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const app = express();
app.use(cors());

const port = 4000;
const { DB_ENDPOINT, DB_SECRET } = process.env;

const headers = {
  "Content-Type": "application/json",
  "X-Hasura-Admin-Secret": DB_SECRET,
};

app.get("/topics", async (_, res) => {
  const endpoint = `${DB_ENDPOINT}/api/rest/topics`;
  const response = await fetch(endpoint, { method: "GET", headers });
  const topics = await response.json();
  res.send(topics).status(200);
});

app.get("/:id", async (req, res) => {
  // TODO: Implement this endpoint
  // If the topic exists, return the topic
  // If the topic does not exist, generate it
});

app.listen(port, () => console.log(`Back End listening on port ${port}`));
