// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller/index');
const { findAll, findById, create, deletebyID } = discussionsController;
const express = require('express');
const router = express.Router();

//모든 discussions 목록을 조회하는 라우터
router.get('/', findAll);


//discussionData 중 id와 일치하는 정보만 조회하는 라우터
router.get('/:id', findById);

//새로 작성한 discussions를 discussionData에 추가하는 라우터
router.post('/', create);

//작성한 글을 discussionData에서 삭제하는 라우터
router.delete('/:id', deletebyID);

module.exports = router;
