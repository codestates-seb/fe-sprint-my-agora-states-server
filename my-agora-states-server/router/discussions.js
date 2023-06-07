// TODO: discussions 라우터를 완성합니다.

const { app } = require("../app");
const { discussionsController } = require("../controller");
const { findAll, findById, addCreate, update } = discussionsController;
const express = require("express");
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get("/", findAll);

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get("/:id", findById);
// 생성 라우터
router.post("/", addCreate);
// 업데이트 라우터
router.put("/:id", update);
module.exports = router;
