const { agoraStatesDiscussions } = require("../repository/discussions");
//데이터를 담은 변수
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // 1. TODO: 모든 discussions 목록 응답
    // get /discussions
    if (Object.keys(req.query).length === 0) { //쿼리가 없을때
      return res.status(200).json(discussionsData);
    }
  },

  findById: (req, res) => {
    // 2. TODO: 요청으로 들어온 id와 일치하는 discussion 응답
    const { id } = req.params;
    let filteredData = discussionsData.filter(discussion => {//req.params.id가 string 형태로 들어온다. Number로 변환
      return discussion.id === Number(id);
    })
    if (filteredData.length === 0) { //필터되어 나온 게 없다면
      return res.status(404).json('${id} is not found');
    } else { //필터되어서 나온 게 있다면
      return res.status(200).json(filteredData[0]);
      //[0]으로 뽑아와야만 출력이 된다.
    }
  }
};

module.exports = {
  discussionsController,
};