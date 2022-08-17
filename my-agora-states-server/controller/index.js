const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    let data = discussionsData;
    return res.status(200).json(data);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    
    const data = discussionsData.filter(ele => Number(req.params.id) === ele.id);
    return data.length !== 0 ? res.status(200).json(...data) : res.status(404).json('err');
  }

};

module.exports = {
  discussionsController,
};
