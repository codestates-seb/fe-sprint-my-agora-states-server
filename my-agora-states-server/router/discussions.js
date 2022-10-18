// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller'); 
// 원래 ../controller/index.js인데, 폴더명 중에 index.js는 생략 가능하다.
const { findAll, findById } = discussionsController;
const express = require('express'); // express 불러오기
const router = express.Router(); // express.Router()를 사용한다.

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get('/', findAll);

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get('/:id', findById);

module.exports = router;
