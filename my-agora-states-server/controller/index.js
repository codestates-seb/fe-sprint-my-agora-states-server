const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    const { id } = req.params;
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    console.log('id: ', id);
    const idx = discussionsData.findIndex(el => el.id === +id);
    console.log('idx: ', idx);
    if (idx === -1){
      return res.status(404).json('The id number does not exist');
    }else{
      return res.status(200).json(discussionsData[idx]);
    }
  }
};

module.exports = {
  discussionsController,
};
