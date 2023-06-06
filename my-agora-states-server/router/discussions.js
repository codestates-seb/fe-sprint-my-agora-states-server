const { discussionsController } = require('../controller');
const { findAll, findById, postContent } = discussionsController;
const express = require('express');
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get('/', findAll);

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get('/:id', findById);

// client에서 post 요청을 보냈을 때
router.post('/', postContent);

module.exports = router;
