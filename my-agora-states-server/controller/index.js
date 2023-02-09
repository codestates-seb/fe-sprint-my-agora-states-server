const e = require('express');
const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const filteredID = discussionsData.filter((el) => el.id === Number(id));
    filteredID.length ? res.status(200).json(filteredID[0]) : res.status(404).json("Not found")
  }

};

module.exports = {
  discussionsController,
};
