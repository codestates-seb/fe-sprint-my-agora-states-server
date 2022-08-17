const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    // req로 받아오는 id가 json 형태 즉,문자열이기 때문에 Number형변환 필요!! 
    let filtered = discussionsData.filter(el => el.id === Number(id)); 

    if(filtered.length !== 0){
      //목록이 아닌 '값'을 전달 => id값이 같은 요소만 필터링된 배열 내 한요소만 리턴하도록 인덱스로 접근 
      return res.status(200).json(filtered[0]);
    }else{
      return res.status(404).json('Not Found!');
  }
  }}

module.exports = {
  discussionsController,
};
