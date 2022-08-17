const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    console.log('here, sending all')
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    console.log('here, sending by id');
    const { id } = req.params;
    const haveId = agoraStatesDiscussions.filter(el => el.id === Number(id));

    if(haveId.length >= 1){
      res.status(200).json(haveId[0]);
    }else{
      res.status(404).json('no id');
    }
  }

};

module.exports = {
  discussionsController,
};
