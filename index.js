import express from "express";
import bodyParser from "body-parser"

const app = express();

let time = {}

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/details", (req, res) => {
  time = req.body
  res.render("details.ejs");
});

app.post("/summary", (req, res) => {
  res.render("summary.ejs", JSON.parse(JSON.stringify({ ...time, ...req.body })) );
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});