const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // res.send('TODO:')
    res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    //res.send("TODO:");
    const { id } = req.params;

    for (let i = 0; i < discussionsData.length; i++) {
      if (discussionsData[i].id === Number(id)) {
        return res.status(200).json(discussionsData[i]);
      }
    }
    return res.status(404).json("not found");
  },
};

module.exports = {
  discussionsController,
};
