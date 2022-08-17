const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    
    const { id } = req.params;
    let filterDiscussion = discussionsData.filter((el) =>
    Number(req.params.id) === el.id);
    if (filterDiscussion[0]){
      res.status(200).json(filterDiscussion[0])
    } else {
      res.status(404).json("No Data Found");
    }
  },
};

module.exports = {
  discussionsController,
};
