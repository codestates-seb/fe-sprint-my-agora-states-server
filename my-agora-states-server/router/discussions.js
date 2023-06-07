// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById, postDiscussion } = discussionsController;
const express = require('express');
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
//전체 디스커션 데이터 조회
router.get('/', findAll)

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get('/:id', findById)

// 디스커션 추가
router.post('/post', postDiscussion)

module.exports = router;
