// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller/index');
const { findAll, findById, update } = discussionsController;
const express = require('express');
const router = express.Router();


    router.get('/', findAll);

    router.get('/:id' ,findById);

    router.put('/:id', update);
    
module.exports = router;
