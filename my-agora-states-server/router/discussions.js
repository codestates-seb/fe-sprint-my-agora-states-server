// TODO: discussions 라우터를 완성합니다.
const express = require('express');
const router = express.Router();

const { discussionsController } = require('../controller');
const { findAll, findById, createDiscussion } = discussionsController;

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get('/', findAll);

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get('/:id', findById);

// 클라이언트로부터 새로운 discussion를 받는 라우터
router.post('/', createDiscussion);

module.exports = router;
