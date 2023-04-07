//discussions 라우터
const { discussionsController } = require('../controller');
const { findAll, findById, replaceById } = discussionsController;
const express = require('express');
const router = express.Router();

// TODO: get 요청하는 라우터를 작성: '/' 경로로 함수 findAll 사용
router.get('/',findAll)
//'/'경로로 get 요청이 들어왔을때, findAll함수를 사용하여 요청처리

// TODO: get 요청하는 라우터 작성: '/:id'경로로 함수 findById 사용
router.get('/:id', findById)
// '/:id' 경로로 get 요청이 들어왔을때, findById라는 함수를 사용하여 요청처리

router.put('/:author', replaceByAuthor)
module.exports = router;
