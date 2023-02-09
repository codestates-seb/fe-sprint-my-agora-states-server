const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

// console.log(discussionsData)

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params;
    // console.log (id) // 2, 1239018
    const discussion = discussionsData.find(data => data.id === Number(id))
    console.log(discussion)
    if(discussion) {
      return res.status(200).json(discussion);
    } else return res.status(404).json('Not Found');
    
  }

};

module.exports = {
  discussionsController,
};
