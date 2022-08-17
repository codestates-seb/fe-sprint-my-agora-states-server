const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const list = discussionsData.filter((item)=> {
      return item.id === Number(req.params.id);
    })

    if(list.length !== 0){
      // list[0]해준 이유는 list는 '하나의 객체를 가지고 있는 배열'이기 때문이다
      return res.json(list[0]);
    }
    else {
      return res.status(404).end();
    }
  }

};

module.exports = {
  discussionsController,
};
