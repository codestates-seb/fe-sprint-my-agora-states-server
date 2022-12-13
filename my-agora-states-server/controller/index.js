const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params
    const fi = discussionsData.filter(a=> a.id === Number(id));

    if(fi.length !== 0){
      return res.status(200).json(fi[0]);
    }else{
      return res.status(404).send('Not found')}
  }


};

module.exports = {
  discussionsController,
};
