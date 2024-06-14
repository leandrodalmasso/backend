const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(
    "<html><head><title>My first Express app</title></head><body><h1>Hello world!</h1></body></html>"
  );
});

app.get("/person/:name", (req, res) => {
  res.send(
    `<html><head><title>My first Express app</title></head><body><h1>Hello ${req.params.name}!</h1></body></html>`
  );
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
