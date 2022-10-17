// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require("../controller");
const { findAll, findById } = discussionsController;
const express = require("express");
const router = express.Router();

// TODO: 1. 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get("/", findAll);
// 경로: /discussions
// router.get('/hello', (req, res) => res.send('hello'));

// TODO: :2. id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get("/:id", findById);
// :id => path parameter => req.params.id
// ?q=hello => query parameter => req.query.q

module.exports = router;
