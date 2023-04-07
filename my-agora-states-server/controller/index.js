const { v4: uuid } = require('uuid');
const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const result = discussionsData.filter((data) => data.id === Number(id));

    if (result.length === 0) {
      return res.status(404).json('No Data');
    }

    return res.status(200).json(result[0]);
  },

  create: (req, res) => {
    const { title, author, createdAt, bodyHTML, avatarUrl } = req.body;
    const id = uuid();
    const newData = {
      id,
      title,
      author,
      createdAt,
      bodyHTML,
      avatarUrl
    };

    discussionsData.push(newData);
    return res.status(201).json(discussionsData);
  }
};

module.exports = {
  discussionsController,
};
