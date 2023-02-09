const { agoraStatesDiscussions } = require("../repository/discussions");
let discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;

    //idx가 조건을 만족 못한다면 -1
    const idx = discussionsData.findIndex((data) => data.id === +id);

    if (idx >= 0) {
      return res.status(200).json(discussionsData[idx]);
    } else {
      return res.status(404).json("Not Found!");
    }
  },
  //update
  createDiscussion: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const body = req.body;
    discussionsData.unshift(body);
    return res.status(200).json(discussionsData);
  },

  updateDiscussion: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const body = req.body;
    const { id } = req.params;
    //idx가 조건을 만족 못한다면 -1
    const idx = discussionsData.findIndex((data) => data.id === +id);
    console.log(idx);
    if (idx >= 0) {
      updatedDiscussion = { ...discussionsData[idx], ...body };

      discussionsData.splice(idx, 1, updatedDiscussion);

      return res.status(200).json(discussionsData);
    } else {
      return res.status(404).json("Not Found!");
    }
  },

  //delete
  deleteDiscussion: (req, res) => {
    const { id } = req.params;
    //idx가 조건을 만족 못한다면 -1
    const idx = discussionsData.findIndex((data) => data.id === +id);

    if (idx >= 0) {
      discussionsData.splice(idx, 1);
      return res.status(200).json(discussionsData);
    } else {
      return res.status(404).json("Not Found!");
    }
  },
};

module.exports = {
  discussionsController,
};
