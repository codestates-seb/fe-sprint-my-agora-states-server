const { agoraStatesDiscussions } = require("../repository/discussions");
// discussions 목록이 담긴 데이터
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
    //throw "";
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    //return res.status(200).send("hi");
    //일단 연결은 됐으
    //console.log(req.params);
    const params = req.params.id;
    //console.log(typeof params);
    const data = discussionsData.filter((diss) => diss.id === Number(params));
    console.log(data);
    if (data.length !== 0) {
      return res.status(200).json(data[0]);
    } else {
      return res.status(404).end();
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
