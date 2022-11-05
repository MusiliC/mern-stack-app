const express = require("express");
const dotenv = require("dotenv");
const notes = require("./data/notes");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("api is running....");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});

app.get("/api/notes/:id", async (req, res) => {
  const oneNote = await notes.find((n) => n._id == req.params.id);
  res.send(oneNote)
  
});

const PORT = process.env.PORT || 5000;

app.listen(5000, () => {
  console.log(`server running on port ${PORT}`);
});
