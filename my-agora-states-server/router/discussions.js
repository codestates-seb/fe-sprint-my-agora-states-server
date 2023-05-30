// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById } = discussionsController;
const express = require('express');
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get('/', function (req, res) {
    if(Object.keys(req.params).length == 0){
        findAll(req,res)
    }
})

router.get('/:id', function (req,res) {
    findById(req,res)
})
// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.




module.exports = router;
