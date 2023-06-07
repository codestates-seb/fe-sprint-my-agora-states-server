const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200)
    res.send(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params
    const result = discussionsData.filter(el => el.id.toString() === id)
    res.status(200)
    res.send(result)
  },

  addDis:(req, res) => {
    const data = req.data
    console.log(data);
    discussionsData.unshift(req.body)
    res.status(201)
    res.send('')
  }

};

module.exports = {
  discussionsController,
};
