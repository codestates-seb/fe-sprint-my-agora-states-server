const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const result = discussionsData.find(
      (item) => item.id === Number(req.params.id)
    );
    console.log(result);
    if (result) {
      res.status(200).send(result);
    } else {
      res.status(404).send();
    }
  },

  addDiscussion: (req, res) => {
    const discussion = {
      id: "",
      createdAt: new Date(),
      title: null /*req에서 받아온 데이터*/,
      url: "",
      author: "kimploo",
      answer: null,
      bodyHTML: null /*req에서 받아온 데이터*/,
      avatarUrl:
        "https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4",
    };
    discussionsData.unshift(discussion);
    res.status(200).send(discussionsData);
  },

  delDiscussion: (req, res) => {
    const index = discussionsData.findIndex(
      (item) => item.id === Number(req.params.id)
    );
    const discussionsData = discussionsData.splice(index, 1);
    res.status(200).send(discussionsData);
  },
};

module.exports = {
  discussionsController,
};
