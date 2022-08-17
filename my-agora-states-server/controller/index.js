const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    //console.log(req.params);
    const { id } = req.params;
    let hasId = false;
    discussionsData.forEach((discussion) => {
      if (discussion.id === Number(id)) hasId = true;
    });
    if (hasId) {
      res
        .status(200)
        .json(
          ...discussionsData.filter(
            (discussion) => discussion.id === Number(id)
          )
        );
    } else {
      res.status(404).send("ID doesn't exist.");
    }
  },
};

module.exports = {
  discussionsController,
};
