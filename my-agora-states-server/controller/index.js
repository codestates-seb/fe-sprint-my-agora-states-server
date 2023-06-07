const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;

    // console.log(typeof id); id가 string 이기때문에 타입을 맞춰줘야 한다
    const target = discussionsData.find((cur) => +cur.id === +id);

    return target
      ? res.status(200).send(target)
      : res.status(404).send("Discussion Not Found");
  },

  addDiscussion: (req, res) => {
    // request에서 요청한 id, title, question
    if (!req.body) {
      return res.status(404).send("디스커션 등록 실패");
    }
    const { id, username, title } = req.body;

    const newDiscussion = {
      id,
      createdAt: new Date().toLocaleString(),
      title,
      url: null,
      author: username,
      answer: null,
      avatarUrl: `https://github.com/${id}.png`,
    };

    discussionsData = [newDiscussion, ...discussionsData];

    return res.status(201).send(newDiscussion);
  },
};

module.exports = {
  discussionsController,
};
