const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// app.get("/", (req, res, next) => {
//   console.log("running app.get");
//   res.send("<h1>Hello from app.js</h1>");
//   return;
// });
app.use(adminRouter);
app.use((req, res) => {
  res.status(404).send("Page not Found");
  return;
});
const port = 4000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
