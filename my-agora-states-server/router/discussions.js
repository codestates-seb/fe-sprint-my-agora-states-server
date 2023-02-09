// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller/index'); // module.export를 이용하여 불러와줌
const { findAll, findById } = discussionsController;
const express = require('express');
const router = express.Router(); //router는 객체이다 => router.get / .put 등등..

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get("/", findAll);

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get("/:id", findById);

module.exports = router;
