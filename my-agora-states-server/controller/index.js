const uuid4 = require('uuid4')

const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params;
    const filtered = discussionsData.find(e=>e.id===Number(id));
    return filtered?res.status(200).json(filtered):res.status(404).send({message: 'can not found data'})
  },

  addPost: (req, res) => {
    const body = req.body;
    const id = uuid4();
    if(body) discussionsData.unshift({id, ...body})
    return res.status(201).send(body);
  }
};

module.exports = {
  discussionsController,
};
