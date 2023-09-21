const http = require("http");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin");
const sequelize = require("./utils/database");
const { Product } = require("./models/productModel");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
// app.get("/", (req, res, next) => {
//   console.log("running app.get");
//   res.send("<h1>Hello from app.js</h1>");
//   return;
// });

app.use(cors());
app.use(express.static(`${__dirname}/Public`));
app.use("/admin", adminRouter);

app.use((req, res) => {
  res.status(404).sendFile(`${__dirname}/views/404page.html`);
  return;
});

Product.sync()
  .then((result) => {
    const port = 3000;
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
    console.log("rrrrrrrrrrrrrrrrrr", result);
  })
  .catch((err) => {
    console.log(err);
  });
