const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다. 
    return res.json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.    
    // id를 기준으로 데이터를 찾아야 함 -> 요청 파라미터 지정
    const { id } = req.params;
    // 모든 데이터가 있는 discussionData 안에서 같은 id를 filter로 찾음
    // discussionData의 id는 문자열이 아니고 number이기 때문에 변환
    let filtered = discussionsData.filter((el) => el.id === Number(id));
    // 데이터가 없는 경우
    if(filtered.length === 0){
      return res.status(404).json('Not found');
    } else {
      return res.status(200).json(filtered[0]);
    }
  }
};

module.exports = {
  discussionsController,
};
