// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById } = discussionsController;
const express = require('express');
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get('/', findAll);
//전체 데이터 조회
//특정 데이터 조회
//디스켜ㅓ션 추가 , 이미 존재하는 특정 디스커션데이터를 수정
// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get('/:id', findById);

module.exports = router;
