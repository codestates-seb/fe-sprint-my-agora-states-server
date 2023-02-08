const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    //res.send('TODO:')
    const { id } = req.params;
    const data = discussionsData.find((a) => a.id === Number(id));

    //성공일 때 상태코드 200, 실패 404 보내주고
    if (data) return res.status(200).json(data);
    else return res.status(404).json("404!");
  },
};

module.exports = {
  discussionsController,
};
