const { discussionsController } = require('../controller');

const { findAll, findById, addDiscussion } = discussionsController;
const express = require('express');

const router = express.Router();

router.get('/', findAll);

router.get('/:id', findById);

router.post('/', addDiscussion);

module.exports = router;
