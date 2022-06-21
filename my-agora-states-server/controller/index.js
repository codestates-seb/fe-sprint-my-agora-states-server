const e = require("cors");
const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다

    return res.status(200).json(discussionsData);
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    const { id } = req.params;
    // const { q } = req.query;
    // console.log("query parameter", q);
    // console.log("path parameter", id);
    if (id !== undefined) {
      const data = discussionsData.find((el) => el.id === Number(id));
      //서버에 있는 데이터의 아이디와 요청의 path parameter id가 같은지 확인하다
      //id => string => Number : 자바 스크립트라서 넘버로 변환
      if (data == null) {
        return res.status(404).end();
        //return 하면 그 함수 실행이 확실히 종료 된다
      }
      return res.status(200).json(data);
    }
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
  },
};

module.exports = {
  discussionsController,
};
