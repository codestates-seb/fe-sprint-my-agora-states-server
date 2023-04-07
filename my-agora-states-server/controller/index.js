const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    let list = discussionsData
    return res.status(200).send(list) //res.send 메소드는 내부적으로 JSON.strigify()를 사용하여 json 형태로 전송
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params  // id라는 변쉐 req.params 속성 중 id 부분의 값이 할당 되게 하는 객체 디스트럭처링 문법 임 
    // req.parmas.id 는 문자열  --> parseInt를 통해 정수형으로 바꿔줘야 함. 
    let list = discussionsData.find(d => parseInt(id) === d.id);

    if(list){
      res.status(200).send(list);
    }else{
      res.status(404).send('sorry');
    }
  }

};

module.exports = {
  discussionsController,
};
