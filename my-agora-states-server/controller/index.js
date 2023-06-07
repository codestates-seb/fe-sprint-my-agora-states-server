const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } =req.params;
    const filteredData = discussionsData.filter((data) => data.id === parseInt(id));
    if(filteredData.length > 0){
      res.json(filteredData[0]);
    }else {
      res.status(404).json('not Found');
    }
  },
  postDiscussions: (req ,res) => {
    const id = discussionsData.length + 6;
    let reqData = req.body;
    reqData.id = id;
    discussionsData.unshift(reqData);
    res.status(200).json(reqData);
    console.log(reqData)
  }
};

module.exports = {
  discussionsController,
};
