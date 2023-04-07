// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById, create, deleteById, editById } =
  discussionsController;
const express = require('express');
const router = express.Router();

router.get('/', findAll);

router.get('/:id', findById);

router.delete('/:id', deleteById);

router.put('/:id', editById);

router.post('/', create);

module.exports = router;
