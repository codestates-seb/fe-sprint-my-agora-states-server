const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).send(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params;
    // list에는 filter메서드로 discsussion에 있는 id와 요청으로 들어온 id 같을 경우로 걸러줌
    // req.params.id는 string으로 들어오기때문에 비교를 하기 위해서 Number로 바꿔야함
    const list = discussionsData.filter((el) => el.id === Number(id))
    if(list.length !== 0) {
      // 왜 [0]써줘야하지..?
      return res.status(200).send(list[0])
    }
    // 그렇지 않으면 에러
    else {
      return res.status(404).send("Not Found!");
    }
  }
};

module.exports = {
  discussionsController,
};
