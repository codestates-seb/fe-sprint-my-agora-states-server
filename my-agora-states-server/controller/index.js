const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    const { author } = req.query;
    if(author === undefined){
      return res.json(discussionsData);
    }
    const filteredByAuthor = discussionsData.filter((el) => {
      return el.author === author;
    })
    return res.json(filteredByAuthor);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params
    if(id === undefined){
      return res.json(discussionsData)
    }
    const filteredById = discussionsData.filter((el) => {
      return el.id === Number(id);
    })
    if(filteredById.length === 0){
      return res.status(404).json('not found');
    }
    return res.json(...filteredById)
  },

  postDiscussion: (req, res) => {
    const bodydata = req.body;
    const { title, author, bodyHTML } = req.body;
    if(author === ''|| title === '' || bodyHTML === ''){
      return res.json(400).json();
    }
    const id = Number(discussionsData[0].id) + 1;
    const newDisscussion = {
      id, 
      createdAt: now.toLocaleString(),
      ...bodydata
    }
    discussionsData.unshift(newDisscussion);
    return res.json(newDisscussion)
  }
};

module.exports = {
  discussionsController,
};
