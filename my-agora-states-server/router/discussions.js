// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require("../controller");
const { findAll, findById, createOne, updateById, deleteById, findByName } =
  discussionsController;
const express = require("express");
const router = express.Router();

// TODO: 모든 discussion 목록을 조회하는 라우터를 작성합니다.
router.get("/", findAll);
// TODO: discussion 하나를 조회하는 라우터를 작성합니다.
router.get("/:id", findById);
router.get("/name/:author", findByName);
// ADVANCED: discussion 하나를 생성하는 라우터를 작성합니다.
router.post("/", createOne);
// ADVANCED: discussion 하나를 수정하는 라우터를 작성합니다.
router.put("/", updateById);
// ADVANCED: discussion 하나를 삭제하는 라우터를 작성합니다.
router.delete("/:id", deleteById);

module.exports = router;
