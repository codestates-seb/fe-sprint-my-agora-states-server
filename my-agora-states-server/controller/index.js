const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    //1. TODO: 모든 discussions 목록을 응답합니다.
    if (Object.keys(req.query).length === 0) {
      return res.status(200).json(discussionsData);
    }
  },

  findById: (req, res) => {
    //2. TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } =req.params;
    let filteredData = discussionsData.filter(discussion => {
      return discussion.id === Number(id);
    })
    if(filteredData.length === 0) {//필터되어 나온 게 없다면
     return res.status(404).json(`{id} is not found`)
    }
    else { //필터되어서 나온게 있다면
      return res.status(200).json(filteredData[0])
    }
  }
};

module.exports = {
  discussionsController,
};
