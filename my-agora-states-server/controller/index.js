const {agoraStatesDiscussions} = require("../repository/discussions");
let discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params;
    const discussionsById = discussionsData.filter((e) => e.id === Number(id));
    if (discussionsById.length === 0) {
      res.status(404).send("id에 해당하는 데이터가 존재하지 않습니다.");
    }
    res.status(200).send(discussionsById[0]);
  },

  create: (req, res) => {
    const {title, author, bodyHTML} = req.body;
    const newData = {
      id: discussionsData.length + 5,
      createdAt: new Date(),
      title: title,
      author: author,
      answer: null,
      bodyHTML: bodyHTML,
      avatarUrl: "",
    };

    if (title === "" || author === "" || bodyHTML === "") {
      res.status(400).send("데이터가 제대로 전송되지 않았습니다.");
    }

    if (discussionsData.filter((e) => e.author === author).length === 0) {
      newData.avatarUrl =
        "https://avatars.githubusercontent.com/u/97888923?s=64&u=12b18768cdeebcf358b70051283a3ef57be6a20f&v=4";
    } else {
      newData.avatarUrl = discussionsData.filter(
        (e) => e.author === author
      )[0].avatarUrl;
    }
    res.status(200).send(newData);
  },
};

module.exports = {
  discussionsController,
};
