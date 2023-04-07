const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    const { id } = req.params;
    const data = discussionsData.find((d) => d.id === Number(id));
    if (data) {
      return res.status(200).json(data);
    } else {
      return res.status(404).send("Not found");
    }

  },

  //[POST] /post 요청 수행
  create: (req, res) => {
    let { id, createdAt, updatedAt, title, author, answer, bodyHtml, avatarUrl } = req.body
    id = discussionsData.length + 4 + 1
    discussionsData.unshift({ id, createdAt, updatedAt, title, author, answer, bodyHtml, avatarUrl })
    return res.status(201).json(discussionsData)
  },
  deleteById: (req, res) => {

  }



}

module.exports = {
  discussionsController,
};
