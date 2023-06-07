const { query } = require("express");
const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    const { author } = req.query;
    if (author) {
      const filterDiscussionData = discussionsData.filter(
        (item) => item.author === author
      );
      res.status(200).json(filterDiscussionData);
    } else {
      res.status(200).json(discussionsData);
    } // res.send("TODO:");
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const findId = discussionsData.find((item) => item.id === Number(id));
    if (findId) {
      res.status(200).json(findId);
    } else {
      res.status(404).send();
    }
    // res.send("TODO:id");
  },
};

module.exports = {
  discussionsController,
};
