const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

var notes = ""

app.get("/notes", (request, response) => {
  const params = request.query;
  return response.json(notes);
});

app.post("/notes", (request, response) => {
  const body = request.body;


  console.log(body);
  notes = body.note;
  return response.json(notes);
});

app.listen(4444);
