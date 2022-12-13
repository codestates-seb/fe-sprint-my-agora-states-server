const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    if(Object.keys(req.query).length===0){ //입력쿼리가 없을때
      return res.status(200).json(discussionsData);
    }
  },
  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.

    const {id} = req.params;
    //req.params.id >> 문자열 형태를 숫자로 바꿔준뒤 비교필터
    let filtDisData = discussionsData.filter(discussion=>{ 
      return discussion.id === Number(id);
    })
    if(filtDisData.length===0){  //필터 후 나온게 없다면? 404
      return res.status(404).json(`${id} is not found`);
    }else {   //필터되어 나온게 있을 경우 200 // 배열에 담긴 객체이므로 가져올 때 인덱스 0 으로 불러오기
      return res.status(200).json(filtDisData[0]);
    }
  }
};

module.exports = {
  discussionsController,
};
