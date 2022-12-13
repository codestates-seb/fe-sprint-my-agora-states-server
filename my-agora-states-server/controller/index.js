const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const id = req.params.id;
    let filteredData;
    for(let discussion of discussionsData) {
      if(Number(id) === discussion.id) {
        filteredData = discussion; 
      }
    } 
    if(filteredData) {
      res.status(200).json(filteredData);
    }
    else {
      res.status(404).json("id doesn't exist");
    }
  },


  postDiscussion: (req, res) => {
    discussionsData.unshift(req.body);
    res.status(301).json(req.body);
  },

  deleteDiscussion: (req, res) => {
    const id = req.params.id;
    discussionsData
  }
};

module.exports = {
  discussionsController,
};
