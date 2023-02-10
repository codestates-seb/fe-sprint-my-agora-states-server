const { discussionsController } = require('../controller/discussionController');
const { findAll, findById, create, update, deleteById } = discussionsController;
const express = require('express');
const router = express.Router();

router.get('/', findAll);
router.get('/:uuid', findById);
router.post('/', create);
router.put('/:uuid', update);
router.delete('/:id', deleteById);

module.exports = router;
