// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById, create, update, deleteByPostingId } = discussionsController;
const express = require('express');
const router = express.Router();

router.get('/', findAll);
router.get('/:id', findById);
//추가하는 작업(POST)
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteByPostingId);
module.exports = router;
