// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require("../controller");
const { findAll, findById } = discussionsController;
const express = require("express");
const { app } = require("../app");
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
// /면 findAll
router.get("/", findAll);
// app.use("/", findAll);

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
// /:id면 findById
router.get("/:id", findById);

module.exports = router;
