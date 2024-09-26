const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.set("view engine", "ejs");

// Serve static files
app.use("/public", express.static("public"));

// Middleware to parse URL-encoded data
const urlEncoded = bodyParser.urlencoded({ extended: true });

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/person/:name", (req, res) => {
  res.render("person", { name: req.params.name });
});

app.post("/person", urlEncoded, (req, res) => {
  console.log(req.body);
  res.send('Form data received!');
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
