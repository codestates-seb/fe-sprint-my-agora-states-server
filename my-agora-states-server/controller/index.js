const { agoraStatesDiscussions } = require("../repository/discussions"); // 더미 배열들
const discussionsData = agoraStatesDiscussions; // discussionData에 할당

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    let data = discussionsData;
    res.status(200).send(data);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    let data = discussionsData;
    const id = req.params.id;
    // console.log(req.params); // params 확인 - {id: '45'}
    
  // if(id) {
      data = data.filter((d) => d.id === Number(id));
      if(data.length === 0) { // 조회되는 데이터가 없다면 (데이터가 빈 배열이라면)
        res.status(404).send('조회하시는 id가 존재하지 않습니다.');
      }
      // console.log(data[0]);
      res.status(200).send(data[0]); // 조회되는 데이터가 있다면
  // }
  }

};

module.exports = {
  discussionsController,
};
