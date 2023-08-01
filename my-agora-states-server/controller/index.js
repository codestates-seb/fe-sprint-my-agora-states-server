const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
const { v4: uuid } = require('uuid');

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    // const { id, title, url, author, bodyHTML, avatarUrl } = req.body;

    const filteredDiscussion = discussionsData.filter((el)=>{
      return el.id === Number(id);
    })

    if (filteredDiscussion.length > 0){
      res.status(200).json(filteredDiscussion[0])
    } else {
      res.status(404).json('일치하는 id가 존재하지 않습니다.')
    }
  },

  createDiscussion: (req, res) => {
    const { title, content } = req.body;

    const post = {
      id: uuid(),
      title,
      bodyHTML: content,
      createdAt: new Date(),
      answer: null,
    }

    discussionsData.unshift(post)
    res.status(201).json(post)
  },

  deleteDiscussion: (req, res) => {
    const { id } = req.params
    const idx = discussionsData.findIndex((el)=> el.id ===id)

    discussionsData.splice(idx, 1)
    res.status(200).json('삭제되었습니다.')
  }
};

module.exports = {
  discussionsController,
};
