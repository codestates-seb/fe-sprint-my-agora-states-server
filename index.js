const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    let data = discussionsData;
    if (req.query !== undefined) {
      return res.status(200).json(data);
    }
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.

    let data = discussionsData.find((el) => el.id === Number(req.params.id));
    if (data) {
      return res.status(200).json(data);
    } else {
      return res.status(404).json(data);
    }
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
  },

  updateById: (req, res) => {
    let data;
    if (req.params) {
      data = flights.filter((el) => el.id === req.params.id);
      let list = Object.assign(data[0], req.body); //data[0]해준 이유는 data는 지금 하나의 객체를 가지고 있는 배열이기 때문.
      return res.status(200).json(list);
    }

    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
    let data = discussionsData;
    if (req.query.data) {
      data = data.filter((ele) => ele.id !== req.query.id);
      return res.status(200).json(data);
    }
    return res.status(200).json(data);
  },
};

module.exports = {
  discussionsController,
};
