const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params;
    // console.log(id);
    // console.log(discussionsData);

    const filteredData = discussionsData.filter(discussion => discussion.id === Number(id))
    const filteredDataParsed = filteredData.join('')
    // console.log(typeof discussion.id)
    // console.log(typeof id)  // 알고보니 타입이 안맞아서 지체된 부분 ㅠ
    // console.log(filteredData);
    if(filteredData.length === 0) {   // 조건을 filteredData === [] 하면 안되는거 주의해야하는데 ㅠ
      return res.status(404).json("해당하는 ID가 없습니다")
    } else {
      return res.status(200).json(filteredData[0]) // 와 배열안 객체를 응답으로 보여주기 위해서 객체 요소에 접근만 하면 되는거였는데..[0] ㅠ
    }
  }
};

module.exports = {
  discussionsController,
};
