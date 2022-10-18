const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    const data = discussionsData.slice()
    return res.status(200).json(data)

  },

  findById: (req, res) => {
    const {id} = req.params
    const sameID = discussionsData.filter((data) => {
      return data.id === Number(id)
    })

    if(sameID.length === 0) {
      res.status(404).json("잘못된 Request 입니다.")
    } else {
      res.status(200).json(...sameID)
    }
  }

};

module.exports = {
  discussionsController,
};
