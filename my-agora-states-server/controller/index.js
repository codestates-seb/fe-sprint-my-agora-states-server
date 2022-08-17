const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    return res.status(200).json(discussionsData);
    // TODO: 모든 discussions 목록을 응답합니다.
    // res.send("TODO:");
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const user_id = req.params.id;
    const filtered = discussionsData.filter((el) => el.id === Number(user_id));
    console.log(user_id);
    if (filtered.length !== 0) {
      return res.status(200).json(filtered[0]);
    } else {
      return res.status(404).end();
    }

    // res.send("TODO:");
  },
};

module.exports = {
  discussionsController,
};
