const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.

    res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const idDiscusstionsData = discussionsData.filter((ele) => {
      return ele.id === Number(id);
    });
    if (idDiscusstionsData.length === 0) {
      return res.status(404).send("Error");
    } else {
      return res.status(200).json(...idDiscusstionsData);
    }
  },

  post: (req, res) => {
    const body = req.body;
    discussionsData.unshift(body);
    res.status(201).json(body);
  },

  deleteById: (req, res) => {
    const { id } = req.params;
    console.log(id);
    for (let i = 0; i < discussionsData.length; i++) {
      if (discussionsData[i].id === Number(id)) {
        console.log(discussionsData[i]);
        discussionsData.splice(i, 1);
        break;
      }
    }
    res.status(200).send(id);
  },
};

module.exports = {
  discussionsController,
};
