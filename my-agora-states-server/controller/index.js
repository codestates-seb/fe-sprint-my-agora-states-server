const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    console.log(discussionsData);
    
    return res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params
    console.log(typeof(id))
     const data = discussionsData.filter(el=>el.id === parseInt(id))
  //  console.log(data);
    return res.status(200).json(data)
  }

};

module.exports = {
  discussionsController,
};
