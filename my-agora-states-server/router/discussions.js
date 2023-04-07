// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById } = discussionsController;
const express = require('express');
const router = express.Router();


// findAll 메소드와 findById 메소드를 discussionsController에서 불러와 해당 메소드들이 모든 discussions 목록을 조회하는 라우터와 :id에 맞는 discussion을 조회하는 라우터에 연결되도록 작성

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
//모든 discussions 목록을 조회하는 라우터는 GET 메소드를 사용하여 / 경로로 요청이 들어오면 findAll 메소드를 호출하도록 설정
router.get('/', findAll);

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
// :id에 맞는 discussion을 조회하는 라우터는 GET 메소드를 사용하여 /:id 경로로 요청이 들어오면 findById 메소드를 호출하도록 설정
router.get('/:id', findById);

module.exports = router;
