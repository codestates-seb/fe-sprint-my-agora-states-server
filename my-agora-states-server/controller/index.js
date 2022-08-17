const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;

    // id와 일치하는 데이터가 존재하는 경우
    // id와 일치하는 데이터가 존재하지 않는 경우
    let filtered = discussionsData.filter(
      (discussion) => Number(id) === discussion.id
    )[0];

    if (filtered) return res.status(200).json(filtered);
    else return res.status(404).json("id에 해당하는 데이터가 없습니다");
  },
};

module.exports = {
  discussionsController,
};
