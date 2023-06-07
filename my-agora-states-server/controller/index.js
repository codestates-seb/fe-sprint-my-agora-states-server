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
    const { id, title, question } = req.body;

    const newDiscussion = {
      id,
      createdAt: new Date().toLocaleString(),
      title,
      url: null,
      author: id,
      answer: null,
      avatarUrl:
        "https://avatars.githubusercontent.com/u/97888923?s=64&u=12b18768cdeebcf358b70051283a3ef57be6a20f&v=4",
      bodyHTML: question,
    };
    discussionsData = [newDiscussion, ...discussionsData];

    return res.status(201).send(newDiscussion);
  },
};

module.exports = {
  discussionsController,
};
