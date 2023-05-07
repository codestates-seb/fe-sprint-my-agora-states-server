const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
//index.js

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // params로 들어옴
    if (req.params.id !== undefined) {
      let filterData = discussionsData.filter((it) => {
        return it.id == req.params.id;
      });
      if (filterData.length == 0) {
        res.status(404).end();
      }
      res.status(200).json(filterData[0]);
    }
  },

  createOne: (req, res) => {
    const { title, author, bodyHTML } = req.body;
    const url = `https://github.com/codestates-seb/agora-states-fe/discussions/${id}`;
  },
};

module.exports = {
  discussionsController,
};
