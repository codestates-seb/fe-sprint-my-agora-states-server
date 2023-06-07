// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById } = discussionsController;
const express = require('express');
const router = express.Router();

// discussions 으로 들어오는 요청의 종류를 먼저 알아봅니다.
// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
// 전체 디스커션 데이터
router.get('/', findAll);
// 특정 디스커션 데이터

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.


module.exports = router;
