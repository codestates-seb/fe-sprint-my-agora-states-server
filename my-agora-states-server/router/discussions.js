// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require("../controller/index");
const { findAll, findById, deleteById, update, create } = discussionsController;
const express = require("express");
const router = express.Router();

router.get("/", findAll);
router.get("/:id", findById);
router.delete("/:id", deleteById);
router.put("/:id", update);
router.post("/", create);
// router.post("/", create);
// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.

module.exports = router;
