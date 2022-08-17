const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params;
    let position = discussionsData.findIndex((obj)=>obj.id === Number(id));
    if(position === -1 ) {
      res.status(404).send()
    } else {
      res.status(200).send(discussionsData[position])
    }
  }

};

module.exports = {
  discussionsController,
};
