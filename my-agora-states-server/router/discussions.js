// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById, create, updateById, deleteById } = discussionsController;
const express = require('express');
const router = express.Router();

router.get('/', findAll);

router.get('/:id', findById);

router.post('/', create);

router.put('/:id', updateById);

router.delete('/:id', deleteById);

module.exports = router;
