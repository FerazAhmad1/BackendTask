const http = require("http");
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const adminRouter = require("./routes/admin");
const sequelize = require("./utils/database");
const { Product } = require("./models/productModel");
const { User } = require("./models/userModel");
const { Cart } = require("./models/cartModel");
const { CartItem } = require("./models/cartItemModel");
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

//  Product.sync()
//   .then((result) => {
//     const port = 3000;
//     app.listen(port, () => {
//       console.log(`server running on port ${port}`);
//     });
//     console.log("rrrrrrrrrrrrrrrrrr", result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Product.belongsToMany(Cart, { through: CartItem });
Cart.belongsToMany(Product, { through: CartItem });
(async function tableCreator() {
  await sequelize.sync({ force: true });
})();

const port = 3000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
