const express = require("express");
const router = express.Router();

router.use("/", (req, res, next) => {
  console.log(`In Error Page!!`);
  res.status(404).send(`<h1>Page Not Found:: 404 </h1>`);
});

module.exports = router;
