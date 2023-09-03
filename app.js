const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// app.get("/", (req, res, next) => {
//   console.log("running app.get");
//   res.send("<h1>Hello from app.js</h1>");
//   return;
// });
app.post("/add-product", (req, res) => {
  console.log(req.body, "12222222222222222222");
  // res.json(req.body);
  res.end();
  return;
});
app.get("/", (req, res) => {
  res.send(
    '<form action = "/add-product" method = "POST" ><input type = "text" name="product" ><button type = "submit" >send</button></form>'
  );
  return;
});
const port = 4000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
