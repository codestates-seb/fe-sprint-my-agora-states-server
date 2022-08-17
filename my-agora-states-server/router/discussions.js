// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById } = discussionsController;
const express = require('express');
const router = express.Router();

//큰일났다... 머리속이 새하얗다... 쭈굴...

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get('/', findAll)  // 모든 경로 또는 사용하는 경우 지정된 경로와 일치하는 경로)에 대해 미들웨어 마운트함 -> 하위 경로를 설정
console.dir('test-첫 경로 목록 페이지')

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get('/:id', findById)  // -> 하위 경로를 설정
console.dir('test-첫 경로 id 페이지')


module.exports = router;
