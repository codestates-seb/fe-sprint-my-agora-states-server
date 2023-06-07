//각각의 discussion에 해당하는 요청들을 router가 controller랑 연결할 수 있도록 작성하기
    //discussions router는 어떤 엔드포인트(url) 요청에 한해서 작동이 되어야할까?

// TODO: discussions 라우터를 완성합니다.
    //require 문법으로 참조를 써서 불러오기 (for 모듈단위 유지 보수)
const { discussionsController } = require('../controller');
const { findAll, findById } = discussionsController;
const express = require('express');
const router = express.Router();

//discussions로 들어오는 요청의 종류를 알아야 라우터를 어떻게 작성할 수 있을 지 파악 가능
// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
    //1. 전체 discussion 데이터 조회 (router에서 http 메소드 연결 -> 특정 controller로 실행) ('url Path', 실제 처리하는 로직 함수)
    //localhost:4000/discussions -> hello 출력
    //controller는 따로 작성되어있으므로 실제적인 응답을 처리하는 로직을 여기에 작성하기
    //여기에 함수를 다 작성하는 게 아니라 모듈 단위로 파일 작성
        // router.get('/', (req, res) => {
        //     res.send("Hello")
        // })

router.get('/', findAll);

//2. 특정 discussion 데이터 조회
// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.
router.get('/:id', findById);

module.exports = router;
