const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    //const {id, title, url, author, bodyHTML, avatarUrl} = discussionsData
    res.status(200).json(discussionsData)
    //console.log(req.body)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const foundByIdDiscussion = discussionsData.find(item => +id === item.id)
    console.log(foundByIdDiscussion)
    return foundByIdDiscussion 
      ? res.status(200).json(foundByIdDiscussion) 
      : res.status(404).json(`${id} is not found`)
  }

};

module.exports = {
  discussionsController,
};
