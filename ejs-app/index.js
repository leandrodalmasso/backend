const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.use("/public", express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/person/:name", (req, res) => {
  res.render("person", { name: req.params.name });
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
