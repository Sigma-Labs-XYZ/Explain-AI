import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 4000;

const headers = {
  "Content-Type": "application/json",
  "X-Hasura-Admin-Secret": process.env.DB_SECRET,
};

app.get("/topics", async (req, res) => {
  const response = fetch(`${DB_ENDPOINT}/api/rest/topics`, {
    method: "GET",
    headers,
  });
  res.send(response.json());
});

app.listen(port, () => console.log(`Backend listening on port ${port}`));
