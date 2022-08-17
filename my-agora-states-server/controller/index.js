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

  console.log('============')
  console.log(req.params)
  console.log(req.params.id)
       
  const filteredDiscussion = 
  discussionsData.filter((data)=> { return Number(id) === data.id})[0] //배열로 들어오기 떄문에 꼭 배열의 0번째 인덱스임을 해줘야
  if(filteredDiscussion){
    return res.status(200).json(filteredDiscussion)
    //return res.status(200).send(filteredDiscussion) //json과 send 응답 차이 없음
  }
  else {
  return res.status(404).json('데이터 없음')
  //return res.status(404).send('데이터 없음') 
  }
  }

};

module.exports = {
  discussionsController,
};
