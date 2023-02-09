const { json } = require("express");
const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {uuid} = req.params;
    const filterredData = discussionsData.filter((el) => {
      return Number({uuid}.uuid) === el.id;
    });
    if(filterredData.length === 0) {
      res.status(404).send('데이터가 없어요');
    } else {
      res.send(...filterredData);
    }
  }

};

module.exports = {
  discussionsController,
};
