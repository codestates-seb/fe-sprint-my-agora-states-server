const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.　✅
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.　✅
    const resultData = discussionsData.find((data) => {
      return req.url === `/${data.id}`;  // 데이터가 담긴 배열이 아닌, 데이터 자체를 반환
    });

    if (resultData !== undefined) {  // id가 일치하는 데이터 존재
      return res.status(200).json(resultData);
    } else {  // 하나도 존재하지 않음
      return res.status(404).json();
    }
  }
};

module.exports = {
  discussionsController,
};
