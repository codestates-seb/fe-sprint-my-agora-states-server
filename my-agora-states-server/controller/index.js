const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    //res.send('TODO:')
    return res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    //res.send('TODO:')
    const data = discussionsData.filter((obj)=>{
      return obj.id === Number(req.params.id);
    });
    console.log(data);
    if(data.length !== 0 ){
      return res.status(200).json(data[0])
    } else {
      return res.status(404).end()
    }

  }

};

module.exports = {
  discussionsController,
};
