// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById } = discussionsController;
const express = require('express');
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get('/', findAll);

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
/** 
 * https://ryan-han.com/post/translated/pathvariable_queryparam/
 * Resource가져오는 GET -> Path Variable
 * sort or filtering -> QueryParams 
 */
//id에 맞게 솔팅하는거라서 그런가?
router.get('/:id', findById);

module.exports = router;
