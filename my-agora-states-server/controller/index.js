const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params
    const filteredDiscussions = discussionsData.filter(el => Number(el.id) === Number(id))
    if(filteredDiscussions.length === 0) res.status(404).json(filteredDiscussions)
    else res.status(200).json(...filteredDiscussions)
  }
// 응답의 body 속성으로 id, title, url, author, bodyHTML, avatarUrl이 있어야 합니다. (3 ms)
};

module.exports = {
  discussionsController,
};
