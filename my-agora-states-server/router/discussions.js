// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById } = discussionsController;
const express = require('express');
const router = express.Router();

// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
router.get('/', findAll) // 서버에 있는 목록을 가져와야 하니 get으로 라우팅한다.
                            // 모든 목록을 조회하므로 '/'

// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get('/:id', findById)
            // 조회니까 get을 사용하여 라우팅하되 id를 찾는거니까 슬래시 뒤에 :id를 적어준다.


module.exports = router;
