// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById, findByName } = discussionsController;
const express = require('express');
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get('/', findAll);
//흠...이정도면 모든 목록을 조회하는 라우터인가?

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get('/:id', findById)
//흠...이게 아이디에 맞는 라우터인가?
router.get('posts/:name', findByName)
module.exports = router;