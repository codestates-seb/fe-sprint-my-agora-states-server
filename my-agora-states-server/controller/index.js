const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.send(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;

    const filteredData = discussionsData.filter(function(el) {
      // 파라미터는 string으로 들어오니 숫자랑 비교할때는 Number타입으로 바꿔야 한다.
      return el.id === Number(id)
    })[0]
    
    if(!filteredData) {
      res.status(404).send(filteredData);
    }
    res.status(200).send(filteredData);
  }
};

module.exports = {
  discussionsController,
};
