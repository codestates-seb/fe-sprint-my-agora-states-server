// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require("../controller");
const { findAll, findById, create, deleteById } = discussionsController;
const express = require("express");
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
// discussions로 들어오는 요청의 종류를 알아야함
// GET /discussions (전체)
// 모든 discussion 목록을 조회하는 라우터를 작성합니다.
// GET /discussions/:id (특정)
// discussion 하나를 조회하는 라우터를 작성합니다.

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.

router.get("/", findAll);

router.get("/:id", findById);

// 디스커션 추가
router.post("/", create);

// 특정(id기준) 디스커션 삭제
router.delete("/:id", deleteById);

// 추가과제
// 디스커션을 추가 혹은 이미 존재하는 특정 디스커션 수정

module.exports = router;
