// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById, createDiscussion, deleteDiscussion, update } = discussionsController;
const express = require('express');
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get('/', findAll);

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get('/:id', findById);

//* 새로운 discussion을 추가합니다.
router.post('/', createDiscussion);

//* 주어진 id와 일치하는 discussion을 삭제합니다
router.delete('/:id', deleteDiscussion)

//* discussion을 수정합니다.
router.put('/:id', update)

module.exports = router;
