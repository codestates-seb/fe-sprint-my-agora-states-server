// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller/discussionController');
const { findAll, findById, create, update, deleteById } = discussionsController;
const express = require('express');
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get('/', findAll);

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get('/:uuid', findById);

router.post('/', create);

router.put('/:uuid', update);

router.delete('/:id', deleteById);

module.exports = router;
