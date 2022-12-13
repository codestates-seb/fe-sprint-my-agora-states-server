const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params
    const filterById = discussionsData.filter(data => {
      if(Number(id) === data.id) return data
    })
    if(filterById.length === 0){
      res.status(404).send('Not found')
    }
    else {
      res.status(200).json(...filterById)
    }
  }

};

module.exports = {
  discussionsController,
};
