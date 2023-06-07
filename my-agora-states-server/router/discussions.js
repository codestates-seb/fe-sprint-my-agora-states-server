// TODO: discussions 라우터를 완성합니다.
const { app } = require('../app');
const { discussionsController } = require('../controller');
const { findAll, findById, createDate, updateList, deleteList } = discussionsController;
const express = require('express');
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get('/', findAll);

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get('/:id', findById);

// discussions 목록에 새로운 질문을 추가한다.
router.post('/', createDate);

// discussions에서 특정 하나의 리스트 내용을 수정한다.
router.put('/:id', updateList)

// discussions에서 특정 하나의 리스트 내용을 삭제한다.
router.delete('/:id', deleteList)

module.exports = router;
