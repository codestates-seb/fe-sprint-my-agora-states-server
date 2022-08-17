const { agoraStatesDiscussions } = require("../repository/discussions"); // require로 불러오면 해당 파일을 객체형태로
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    
    const {id} = req.params; // 주소를 통해 들어오는 것을 문자로 들어오기 때문에 넘버로 변환해줘야함.
    
    const result = discussionsData.filter((item)=>{
      return item.id===Number(id);
    })
    if(result.length!==0){
    return res.status(200).json(...result); // 배열에 객체가 있으면 ...문법을 쓰면 객체 상태만 반환됨
  }else{
    res.status(404).send('Not Found');
  }
  }
};

module.exports = {
  discussionsController,
};
