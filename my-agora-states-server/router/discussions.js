// ! 서버와 미들웨어를 구현할 때에는 항상 URI와 구조를 생각하자!
// * client request ===> middleware(cors 등 app.js 객체에서 설정) ===> router(페이지 불러오기 직전 render과정) ===> client response
// TODO: discussions 라우터를 완성합니다.
// * Router : app.js에서 설정한 middleware와 controller에서 설정한 데이터 처리 방식을 연결하여 렌더링 하는 과정
const { discussionsController } = require('../controller');
const { findAll, findById } = discussionsController;
const express = require('express');
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get('/', findAll)
// * .get ===> REST API에서의 GET, POST, PUT, DELETE를 구현하기 위한 내장메서드
// * 1st param ===> URI 중 범위
// * 2nd param ===> 적용될 콜백함 수

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get('/:id', findById)

module.exports = router;
