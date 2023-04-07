// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById, create, update, deleteById} = discussionsController;
const express = require('express');
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get('/',findAll );

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get('/:id', findById);

// 새 discussion 추가
router.post('/', create);

// // id에 맞는 discussion 수정
router.put('/:id', update);

// // id에 맞는 discussion 삭제
router.delete('/:id', deleteById);

module.exports = router;
