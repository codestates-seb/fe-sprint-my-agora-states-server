const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
const _ = require("lodash");

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const filter = discussionsData.filter((el) => el.id === Number(id));

    filter.length > 0
      ? res.status(200).json(...filter)
      : res.status(404).send("404 err");
  },

  create: (req, res) => {
    discussionsData.unshift(req.body);
    return res.status(201).json(discussionsData[0]);
  },

  deleteDiscussion: (req, res) => {
    const { title } = req.params;
    console.log(title);

    // discussionsData = discussionsData.filter((el) => el.title !== title);
    let result = _.remove(discussionsData, { title: title });
    return res.json(result);
  },
};

module.exports = {
  discussionsController,
};
