const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  // TODO: 모든 discussions 목록을 응답합니다.
  // GET /discussions
  findAll: (req, res) => {
    if(Object.keys(req.query).length === 0) {
      return res.status(200).json(discussionsData);
    }
  },
  
  // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
  // GET /discussions/:id
  findById: (req, res) => {
    const { id } = req.params;
    const filteredData = discussionsData.filter(discussion => 
      {return discussion.id === Number(id)});
    // discussionsData에 해당 id와 일치하는 데이터가 존재하는 경우,
    if(filteredData.length !== 0) {
      return res.status(200).json(filteredData[0]);
    // discussionsData에 해당 id와 일치하는 데이터가 존재하지 않는 경우,
    } else {
      return res.status(404).json('Please confirm your ${id}');
    }
  }
};

module.exports = {
  discussionsController,
};
