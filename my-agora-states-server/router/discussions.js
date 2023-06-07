// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById } = discussionsController;
const express = require('express');
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get('/', findAll) // 모든 목록 조회라우터 , '/'는 전체의 뜻

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get('/:id',findById) // id에 맞는 조회

module.exports = router;
