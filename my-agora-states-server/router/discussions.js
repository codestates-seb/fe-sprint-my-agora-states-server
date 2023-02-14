// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById, create, update, deleteId } = discussionsController;
const express = require('express');
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get('/', findAll);

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get('/:id', findById);

// POST(등록) POST(수정) , 
router.post('/', create);

router.put('/:id', update);

router.delete('/:id', deleteId);

module.exports = router;
