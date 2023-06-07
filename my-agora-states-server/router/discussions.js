// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById } = discussionsController;
const express = require('express');
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
// discussions로 들어오는 요청의 종류
// 전체 디스커션 데이터 조회
// 특정 디스커션 데이터 조회
router.get('/', findAll);

router.get('/:id', findById)

// 디스커션을 추가(해보기)
// 혹은 이미 존재하는 특정 디스커션 데이터를 수정(해보기)

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.


module.exports = router;
