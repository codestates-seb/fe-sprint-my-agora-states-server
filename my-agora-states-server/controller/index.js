const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

let booking = [];

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    let filtDisData = discussionsData.filter((discussion) => {
      return discussion.id === Number(id);
    });
    if (filtDisData.length === 0) {
      return res.status(404).json("일치하는 데이터가 없습니다.");
    } else {
      return res.status(200).json(filtDisData[0]);
    }
  },
};

module.exports = {
  discussionsController,
};
