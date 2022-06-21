const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    // console.log(req.params);
    return res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    // params에 아이디 있음
    let list = [];

    list = discussionsData.filter((el) => el.id === Number(req.params.id))

    if (list.length !== 0){
      return res.status(200).json(...list);
    }
    
    return res.status(404).json({message: '해당하는 ID가 없습니다.'});
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    console.log(req.body);
    let list = Object.assign(...discussionsData, req.body);
    console.log(list);
    return res.status(200).json(list)
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    // console.log(req.body);
    let list = discussionsData.filter((el) => el.id === Number(req.body.id));

    if (list.length === 0){
      return res.status(404).json({message: "해당하는 ID가 없습니다."});
    }

    list = Object.assign(...list, req.body);
    // console.log(list);
    return res.status(200).json(list)
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
    return res.status(200).json(discussionsData)
  },
};

module.exports = {
  discussionsController,
};
