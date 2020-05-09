const express = require("express");

const app = express();

app.get("/users", (request, response) => {
  const params = request.query;

  return response.json({
    nome: params.name,
    sobrenome: " Lima",
  });
});

app.listen(3333);
