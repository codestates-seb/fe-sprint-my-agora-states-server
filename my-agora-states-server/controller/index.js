const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params

    // req.params.id는 json / discussion.id는 number
    const filteredData = discussionsData.filter(discussion => {
      return discussion.id === Number(req.params.id)
    })

    if(filteredData.length !== 0) {
      return res.status(200).json(...filteredData)
    }
    // filteredData가 빈배열 ( = 데이터에 존재하지 않는 id를 요청)
    else {
      return res.status(404).json("잘못된 요청입니다")
    }
  }

};

module.exports = {
  discussionsController,
};
