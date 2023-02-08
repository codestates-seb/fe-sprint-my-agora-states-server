// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById } = discussionsController;
const express = require('express');
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get('/', findAll);

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get('/:id', findById);


/*
//새로운 질문 등록을 위한 라우트 작성 (과제 X)
router.post('/', create);

//질문 삭제를 위한 라우트 작성 (과제 X)
router.delete('/:id', deleteById);

*/
module.exports = router;
