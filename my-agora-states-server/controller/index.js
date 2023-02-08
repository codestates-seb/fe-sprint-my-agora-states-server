const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    // let founded = discussionsData.find((a) => a.id === Number(id));
    // console.log(typeof id);
    // if (founded) {
    //   return res.status(200).json(founded);
    // } else {
    //   return res.status(404).json(founded);
    // }

    let filtered = discussionsData.filter((a) => a.id === Number(id));
    if (filtered.length === 0) {
      return res.status(404).json("not found");
    } else {
      return res.status(200).json(filtered[0]);
    }
  },
};

module.exports = {
  discussionsController,
};
