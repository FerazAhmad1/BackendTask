const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

router.post("/contactus", (req, res) => {
  console.log(" iam getting call");
  return;
});
router.get("/add-product", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "/../", "views/add-product.html"));
  } catch (error) {
    console.log(error.message);
  }

  return;
});

router.post("/add-product", (req, res) => {
  console.log("i am running");
  res.end();
  return;
});
router.get("/contactus", (req, res) => {
  res.sendFile(path.join(__dirname, "/../", "views/contactus.html"));
});
module.exports = router;
