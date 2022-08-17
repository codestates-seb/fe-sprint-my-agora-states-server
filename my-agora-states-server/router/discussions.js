// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById } = discussionsController;
const express = require('express');
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get('/', findAll)  // /만 치면 모든 목록을 조회하는 라우터!
// app.js에서 discussion연결해줬으니까 / -> 곧 /discussions ! 

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get('/:id', findById)

module.exports = router;
