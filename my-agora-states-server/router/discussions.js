// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById, create, update } = discussionsController;
const express = require('express');
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.

router.get('/', findAll);

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.

router.get('/:id', findById);

// 새로운 discussion을 추가하는 라우터를 작성합니다
router.post('/', create);

// 아이디를 입력하면 해당 아이디의 discussion을 수정하는 라우터를 작성합니다.
router.put('/:id', update);

module.exports = router;
