const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const list = discussionsData.find((item) => item.id === Number(id) )
    if(list) {
      return res.status(200).json(list);
    }
    else{
      return res.status(404).json('Bad Request');
  }
    
}

};

module.exports = { discussionsController};
