const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // fillter함수 사용
    // req.params.id === discussionsData.id 를 조건으로 필터링

    let reqID = Number(req.params.id);
    let ListOfData = discussionsData;

    ListOfData = ListOfData.filter((data) => {
      return reqID === data.id;
    })

    // 필터링 결과가 빈 배열이면 404응답, 배열에 요소가 존재하는 경우 200응답
    if(ListOfData.length === 0){
      res.status(404).send('해당 id와 일치하는 데이터가 존재하지 않습니다.');
    }else {
      for (let ele of ListOfData){
        res.status(200).json(ele);
      }
    }
  }

};

module.exports = {
  discussionsController,
};
