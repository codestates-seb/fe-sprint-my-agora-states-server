const { v4: uuid } = require('uuid');

const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    res.send(discussionsData);
  },

  findById: (req, res) => {
    const { id } = req.params;
    const filteredData = discussionsData.filter((data) => data.id === Number(id))[0];

    if (filteredData === undefined) {
      res.status(404).send('id에 해당하는 discussion이 없습니다.');
    } else {
      res.status(200).send(filteredData);
    }
  },

  create: (req, res) => {
    const id = uuid();
    const { title, author, bodyHTML, avatarUrl } = req.body;

    const newPost = {
      id,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      title,
      url: `http://localhost:3000/discussions/${id}`,
      author,
      answer: null,
      bodyHTML,
      avatarUrl,
    };

    // FIXME: 실제 배열에 push하는 작업

    res.status(201).send(newPost);
  },

  update: (req, res) => {
    const { id } = req.params;
    const bodyData = req.body;

    const beUpdatedIdx = discussionsData.findIndex((data) => data.id === Number(id));
    const updatedPost = { ...discussionsData[beUpdatedIdx], ...bodyData };

    discussionsData.splice(beUpdatedIdx, 1, updatedPost);

    res.status(200).send(updatedPost);
  },

  deleteById: (req, res) => {
    const { id } = req.params;

    if (!discussionsData.some((data) => data.id !== Number(id))) {
      res.status(404).send('id에 해당하는 포스트가 존재하지 않습니다.');
    } else {
      // FIXME: 실제 배열에서 삭제하는 작업

      res.status(200).send(`포스트(id: ${id})가 삭제되었습니다.`);
    }
  },
};

module.exports = {
  discussionsController,
};
