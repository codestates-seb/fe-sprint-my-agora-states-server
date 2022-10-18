const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // [GET] /discussions
    // req.query
    return res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // [GET] /discussions/:id
    // req.params
    const {id} = req.params;
    console.log(id) // { id: ':id' } -> id 값이 문자열임 -> 숫자로 변환
    // data에 id 와 일치하는 데이터 존재하면 200 && 응답
    let filteredId = discussionsData.filter((data) => data.id === Number(id))
    // 
    
    // 같은 것만 뽑아준 상태에서 -> 
    if(filteredId.length !== 0 ) {
      console.log(filteredId[0]) // id가 고정값이라서
      return res.status(200).json(filteredId[0]);
    }
    // 일치 하는게  존재하지 않으면 404 && 응답
    else{
      return res.status(404).send('Not Found');
    }
  }
};

module.exports = {
  discussionsController,
};
