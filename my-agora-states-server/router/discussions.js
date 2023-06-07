// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById, addById, updatedById, deleteById } = discussionsController;
const express = require('express');
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get('/', findAll)

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get('/:id', findById)

router.post('/', addById) // 디스커션 새롭게 추가
router.put('/:id', updatedById) // 디스커션 수정
router.delete('/:id', deleteById) // 디스커션 삭제

module.exports = router;
