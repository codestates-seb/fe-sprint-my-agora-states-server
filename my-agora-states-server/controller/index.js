const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
  // res.send()
    let data = discussionsData.filter(el => Number(req.params.id) === el.id);
    
    if(data.length > 0) {
      return res.status(200).json(...data);
    } else {
      return res.status(404).send('Sorry cant find that!');
    }
  }
};

module.exports = {
  discussionsController,
};

