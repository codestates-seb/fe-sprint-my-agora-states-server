const { agoraStatesDiscussions } = require("../repository/discussions");
let discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.

    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const response = discussionsData.find((ele) => ele.id === Number(id));
    if (response === undefined) res.status(404).json();
    else res.status(200).json(response);
  },

  createDiscussion: (req, res) => {
    let { id } = req.params;
    id = Number(id);
    discussionsData.push({ id, ...req.body });

    res.status(200).json(discussionsData[discussionsData.length - 1]);
  },

  modifyDiscussion: (req, res) => {
    const { id } = req.params;

    discussionsData = discussionsData.map((ele) => {
      if (ele.id === Number(id)) {
        return { ...ele, ...req.body };
      } else return ele;
    });
    console.log(discussionsData[discussionsData.length - 1]);
    res.status(200).json(discussionsData);
  },
  deleteDiscussion: (req, res) => {
    const { id } = req.params;
    discussionsData = discussionsData.filter((ele) => ele.id !== Number(id));
    res.status(200).json(discussionsData);
  },
};

module.exports = {
  discussionsController,
};
