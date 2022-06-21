const { listen } = require("express/lib/application");
const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData)
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    const dataFilter = discussionsData.filter(el=> Number(req.params.id) === el.id)
    if(dataFilter.length !== 0) {
      return res.status(200).json(...dataFilter);
    } else return res.status(404).json();
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    discussionsData.push(req.body);
    return res.status(201).json({});
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
