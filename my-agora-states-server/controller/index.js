const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.

    return res.status(200).json(discussionsData)
    
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    
    const result = discussionsData.filter((obj)=>{return obj.id === Number(req.params.id)})
    const sending = result[0];
    return (result.length !== 0? res.status(200).json(sending) : res.status(404).send('Not Found'))
    
  }

};

module.exports = {
  discussionsController,
};
