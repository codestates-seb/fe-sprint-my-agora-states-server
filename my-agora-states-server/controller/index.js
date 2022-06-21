const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // if (Object.keys(req.query).length === 0) {
    //   return res.status(200).json(discussionsData);
    // }
    return res.status(200).json(discussionsData);
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    console.log(req.params); //주소창에 discussions/45 치면 { id: '45' } 로 찍힘
    console.log(req.query);
    ///서버에있는 데이터 아이디와 요청의 path parameter id가 같은지 확인
    // if (req.params) {
    //   if (req.params.id) {
    //     const list = discussionsData.filter(
    //       (data) => Number(req.params.id) === data.id
    //     );
    //     console.log(list);
    //     return res.status(200).json(list);
    //   } else {
    //     return res.status(404).json("no such id exists");
    //   }
    // }
    const found = discussionsData.find(
      (data) => Number(req.params.id) === data.id
    ); //id일치하는 객체 정보 가져온다.
    if (found !== undefined) {
      return res.status(200).json(found);
    } else {
      return res.status(404).json("no such id exists");
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
