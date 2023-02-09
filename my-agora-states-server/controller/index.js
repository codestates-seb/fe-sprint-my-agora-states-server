const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // !!! req.parmas.id가 string형태로 들어오기 때문에 Number로 변환해주어야 한다.
    const data = discussionsData.find((el) => el.id === Number(req.params.id));
    if (!data) return res.status(404).send("Not found");
    return res.status(200).json(data);
  },
};

module.exports = {
  discussionsController,
};
