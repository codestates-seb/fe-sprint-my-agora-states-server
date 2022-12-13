const { json } = require("express");
const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    
    return res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // id 입력값이 있고, id로 필터링한 값이 있을 때 -> 200
    // id 입력값이 없거나, id로 필터링한 값이 없을 때 -> 404
    const { id } = req.params
    let filtered = discussionsData.filter(discussion => discussion.id === parseInt(id))
    
    if (filtered.length === 0) return res.status(404).json(discussionsData)

    return res.status(200).json(filtered[0])
  }

};

module.exports = {
  discussionsController,
};
