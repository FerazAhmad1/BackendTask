const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.get("/", (req, res, next) => {
  console.log("running app.get");
  res.send("<h1>Hello from app.js</h1>");
  return;
});
app.get("/add-product", (req, res) => {
  res.send(
    '<form ><input type = "text" ><button type = "submit" >send</button></form>'
  );
});
const port = 4000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
