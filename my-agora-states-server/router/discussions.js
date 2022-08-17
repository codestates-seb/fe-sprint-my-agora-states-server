// // TODO: discussions 라우터를 완성합니다.
const  {discussionsController} = require('../controller');
// index js에서 객체로 해당 discussionsController을 감싸서 내보내줌 그래서 구조 분해할당으로 얻어낸

const { findAll, findById } = discussionsController;
const express = require('express');
const router = express.Router();
console.log(router)
// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get('/',findAll);

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get('/:id',findById);

module.exports = router;
