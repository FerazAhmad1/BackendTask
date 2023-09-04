const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    '<form action = "/add-product" method = "POST" ><input type = "text" name="product" ><input type = "text" name="size" ><button type = "submit" >send</button></form>'
  );
  return;
});

router.post("/add-product", (req, res) => {
  console.log(req.body, "12222222222222222222");
  // res.json(req.body);
  res.end();
  return;
});
module.exports = router;
