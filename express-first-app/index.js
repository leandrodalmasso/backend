const express = require("express");
const app = express();

// middleware
app.use('/public', express.static('public'));

app.get("/", (req, res) => {
  res.send(
    "<html><link href='/public/styles.css' rel='stylesheet'/><head><title>My first Express app</title></head><body><h1>Hello world!</h1></body></html>"
  );
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello world!" });
});

app.get("/person/:name", (req, res) => {
  res.send(
    `<html><head><title>My first Express app</title></head><body><h1>Hello ${req.params.name}!</h1></body></html>`
  );
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
