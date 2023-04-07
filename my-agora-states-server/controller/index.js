const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
const { v4: uuid } = require('uuid');

let newData = [];

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    if(Object.keys(req.query).length === 0) {
      return res.status(200).send(discussionsData);
    }
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;

    const filteredId = discussionsData.find((el) => el.id === parseInt(id));
    if (filteredId) {
      return res.status(200).json(filteredId);
    } else {
      return res.status(404).send(`${id}와 일치하는 데이터가 없습니다.`);
    }
  },

  // POST
  create: (req, res) => {
    const id = uuid();
    const { author, title } = req.body;
    newData.unshift({ id, author, title });
    res.location(`/discussions/:${id}`);
    return res.status(201).json(newData[0]);
  },
};

module.exports = {
  discussionsController,
};
