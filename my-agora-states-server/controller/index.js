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
    console.log(req.body);

    const { id, author, title } = req.body;

    const newDiscussion = {
      id,
      createdAt: new Date().toLocaleString(),
      title,
      url: null,
      author,
      answer: null,
      avatarUrl: `https://github.com/${author}.png`,
    };

    console.log(newDiscussion);
    // 배열에 추가하는 부분...

    discussionsData.unshift(newDiscussion);

    res.status(201).send(newDiscussion);
  },
};

module.exports = {
  discussionsController,
};
