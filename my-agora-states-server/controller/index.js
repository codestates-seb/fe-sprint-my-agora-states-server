const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(agoraStatesDiscussions);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    console.log(typeof req.params); // type이 object
    console.log(id);

    const data = discussionsData.filter((el) => el.id === Number(id));
    if (data.length !== 0) {
      res.send(data[0]);
    } else {
      res.send(res.status(404).json("Not found!"));
    }
  },
};

module.exports = {
  discussionsController,
};
