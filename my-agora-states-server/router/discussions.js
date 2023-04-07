// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById } = discussionsController;
const express = require('express');
const router = express.Router();

router.get('/', findAll);
// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.

router.get('/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const discussion = await findById(id);
      if (!discussion) {
        return res.status(404).json({ message: 'Discussion not found' });
      }
      res.status(200).json(discussion);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.


module.exports = router;
