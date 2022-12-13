const { discussionsController } = require("../controller/index");
const express = require("express");
const router = express.Router();

router.get("/", discussionsController.findAll);

router.get("/:id", discussionsController.findById);

router.post("/", discussionsController.create);

router.delete("/:id", discussionsController.delete);

module.exports = router;
