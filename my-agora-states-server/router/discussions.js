// TODO: discussions 라우터를 완성합니다.
const {
  discussionsController,
} = require("../controller/discussion_controller");
const { findAll, findById, createPost, modifyPost, deletePost } =
  discussionsController;
const express = require("express");
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get("/", findAll);

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get("/:id", findById);

// discussions 목록에 POST의 데이터를 추가하는 라우터 작성
router.post("/", createPost);

// :id에 있는 discussion의 title과 bodyHTML을 수정하는 라우터 작성
router.put("/:id", modifyPost);

// :id에 있는 discussion을 삭제하는 라우터 작성
router.delete("/:id", deletePost);

module.exports = router;
