const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    const { author } = req.query;
    if(author){
      res.json(discussionsData.filter((item) => item.author === author))
    }else{
      res.json(discussionsData)
    }
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params
    const filterDiscusstinsData = discussionsData.filter(el => el.id === Number(id))
    if(filterDiscusstinsData.length === 0){
      res.status(404).json(`nonono`)
    }else{
      res.status(200).json(filterDiscusstinsData[0])
    }
  }

};

module.exports = {
  discussionsController,
};
