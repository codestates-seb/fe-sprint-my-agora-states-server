const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200)
    res.json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const result = discussionsData.filter(data => data.id == Number(req.params.id))
    if(result.length === 0){
      res.status(404).send('Not Found!');
    }
    else{
      res.json(...result);
    }
  }

};

module.exports = {
  discussionsController,
};
