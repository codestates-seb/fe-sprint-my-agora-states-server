const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    const { author } = req.params
    
    return res.json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params
    const idList = discussionsData.find(data => data.id === Number(id))

    if(idList){
      res.status(200).json(idList);
    } else {
      return res.status(404).json('일치하는 id의 데이터를 찾을 수 없습니다.');
    }
  }

};

module.exports = {
  discussionsController,
};
