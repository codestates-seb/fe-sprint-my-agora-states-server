const { create,deletediscussion } = require('../controller/newdis');
const express = require('express');
const router= express.Router();

// 새로운 질문 생성 

router.post('/', create)

router.delete('/:id', deletediscussion)


module.exports =router;