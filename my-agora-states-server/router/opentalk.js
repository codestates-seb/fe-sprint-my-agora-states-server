
const { opentalkController } = require('../controller');
const { findAll, create } = opentalkController;
const express = require('express');
const router = express.Router();


router.get('/', findAll);

router.post('/', create);


module.exports = router;
