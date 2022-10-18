// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById } = discussionsController;
const express = require('express');
const router = express.Router();

// router.get('/',(req,res) => res.status(200).send("Welcomd to the main page of discussions router. available endpoints: /findall, /findbyid")) -- this code line is unused. endpoint '/' must return all data

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get('/', findAll);

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get('/:id',findById);

module.exports = router;
