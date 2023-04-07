const { discussionsController } = require('../controller');
const { findAll, findById } = discussionsController;
const express = require('express');
const router = express.Router();

router.get('/', findAll);
router.get('/:id', findById);

module.exports = router;
