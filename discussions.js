// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById, createOne, updateById, deleteById } = discussionsController;
const express = require('express');
const router = express.Router();

router.get('/', findAll)
// router.use(function(req,res,next){
//     next()
// })
router.get('/:id',findById)
// router.use(function(req,res,next){
//     next()
// })
router.post('/',createOne)
// ADVANCED: discussion 하나를 생성하는 라우터를 작성합니다.

// ADVANCED: discussion 하나를 수정하는 라우터를 작성합니다.

// ADVANCED: discussion 하나를 삭제하는 라우터를 작성합니다.
module.exports = router;
