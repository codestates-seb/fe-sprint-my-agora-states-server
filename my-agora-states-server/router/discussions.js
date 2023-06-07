// TODO: discussions 라우터를 완성합니다.
const { discussionsController } = require("../controller");
const { findAll, findById } = discussionsController;
const express = require("express");
const router = express.Router();

// discussions로 들어오는 요청의 종류를 알아야 라우트를 할 수 있어
// TODO: 모든 discussions 목록을 조회하는 라우터를 작성합니다.
// 디스커션과 컨트롤러를 연결
// 전체 디스커션 데이터 조회 => controller 파일에 함수 저장되어 있어 -> 연결만 해주면 돼
router.get("/", findAll);
// 특정 디스커션 데이터 조회
router.get("/:id", findById);

//discussion 추가
//router.post()
//혹은 이미 존재하는 특정 디스커션 데이터를 수정
//router.put()
// TODO: :id에 맞는 discussion을 조회하는 라우터를 작성합니다.

module.exports = router;

//더 해볼 수 있는 기능들
//서버
//디스커션 데이터 추가
//특정 디스커션 데이터 수정

//클라이언트
//질문 제목 클릭 시 질문 내용과 답변 내용 볼 수 있는
//답변이 달렸는지 여부에 따라 렌더링이 달라지도록(e.g. 체크이모지)
//서버 데이터를 수정할 수 있는 인터페이스 구현(e.g. 제목 옆 연필 이모지 누르면 제목 수정)
//특정 데이터를 삭제할 수 있는 인터페이스 구현(e.g. 디스커션 옆 휴지통 이모지)
