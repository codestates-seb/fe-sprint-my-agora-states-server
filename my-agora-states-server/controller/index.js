const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(discussionsData)
  },

  //1. 요청에 담겨온 값을 확인한다
  //2. 해야할 일을 한다 //TODO
  //3. 응답에 맞게 보낸다
  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    
    const {id} = req.params; //id는 string으로 넘어온다
    const discussion = discussionsData.filter(el => el.id === Number.parseInt(id))[0]
    
    // 만약에 id와 일치하는 discussion이 존재하지 않는다면ㄴ
    // 상태코드 404는 Not Found
    if(!discussion) {
      res.status(404).send('id와 일치하는 데이터가 없습니다')
    }


    // id와 일치하는 discussion이 존재하면
    // 성공을 의미하는 상태코드 200고 함께
    // 응답을 보낸다
    res.status(200).send(discussion)
  }

};

module.exports = {
  discussionsController,
};
