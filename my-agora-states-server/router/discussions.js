const { discussionsController } = require('../controller');
const { findAll, findById, create, update, deleteByPostingId } = discussionsController;
const express = require('express');
const router = express.Router();

// 모든 discussions 목록을 조회하는 라우터를 작성
router.get('/', findAll);

// id에 맞는 discussion을 조회하는 라우터를 작성
router.get('/:userId', findById);

router.post('/', create);
router.put('/:postingId', update);
router.delete('/:postingId', deleteByPostingId);

module.exports = router;
