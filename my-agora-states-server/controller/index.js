const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).send(discussionsData);
  },
  add: (req, res) => {
    discussionsData.unshift(req.body);
    return res.status(201).send(discussionsData);
  },
  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const result = discussionsData.find((el) => el.id === Number(id));
    if (result) res.status(200).json(result);
    else res.status(404).send("아이디없음 ㅋ");
  },
};

module.exports = {
  discussionsController,
};
