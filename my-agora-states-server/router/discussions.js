// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require("../controller");
const { findAll, findById } = discussionsController;
const express = require("express");
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get("/", findAll);

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get("/:id", findById);

// // discussion 하나를 생성하는 router
// router.post("/", createOne);

// // discussion 하나를 수정하는 router
// router.put("/:id", updateById);

// // discusstion 하나를 삭제하는 router
// router.delete("/:id", deleteById);

module.exports = router;
