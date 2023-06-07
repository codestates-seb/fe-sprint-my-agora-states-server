// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require('../controller');
const { findAll, findById, addDiscussion } = discussionsController;
const express = require('express');
const router = express.Router();

// /discussions 로 들어오는 요청의 종류
// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
// 전체 디스커션 데이터 조회
// 특정 디스커션 데이터 조회
router.get('/', findAll);

// 디스커션을 추가

// 혹은 이미 존재하는 특정 디스커션 데이터를 수정
// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.

module.exports = router;

// 혹시 클라이언트와 연동했을 경우 서버사이드에서 discussions로 주소 쳐서
// 들어갈 경우 디스커션 데이터가 나오는게 정상인가요?
router.post('/', addDiscussion);

// 서버
// 디스커션 데이터 추가
// 클라이언트
// 질문 내용과 답변 내용 볼 수 있도록
// 답변이 달렸는 지 여부에 따라 렌더링이 달라지도록 (e.g. 체크 이모지)
