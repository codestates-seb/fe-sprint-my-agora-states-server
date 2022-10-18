const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;


const discussionsController = {
  findAll: (req, res) => {
    const result = discussionsData.slice();
    return res.status(200).json(result)
  },

  findById: (req, res) => {
    const {id} = req.params;
    const result = discussionsData.find(el => el.id === Number(id))
    if(result){
      return res.status(200).json(result)
    } else{
      return res.status(404).json('error')
    }
  }
  // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
  }

module.exports = {
  discussionsController,
};
