// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require("../controller");
const { findAll, findById, addDiscussion, delDiscussion } =
  discussionsController;
const express = require("express");
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get("/", findAll);

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get("/:id", findById);

// 추가: 질문을 추가합니다.
router.post("/", addDiscussion);

// 추가: 질문을 삭제합니다.
router.delete("/:id", delDiscussion);

module.exports = router;
