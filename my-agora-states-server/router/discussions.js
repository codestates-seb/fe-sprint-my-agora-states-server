const { discussionsController } = require('../controller');
const { findAll, findById, create } = discussionsController;
const express = require('express');
const router = express.Router();

router.get('/', findAll);
router.get('/:id', findById);
router.post('/', create);

module.exports = router;
