const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    //요청으로 들어온 id와 일치하면 상태코드 200과 함께 일치하는 데이터 보내기
    //요청으로 들어온 id와 불일치하면 상태코드 404와 함께 응답 보내기
    const { id } = req.params;
    const idFilteredDiscussions = discussionsData.filter(discussion => {
      return discussion.id === Number(id);
    });
    if(idFilteredDiscussions.length === 0) {
      return res.status(404).end();
    }else {
      return res.status(200).json(idFilteredDiscussions[0]);
    }
  }
};

module.exports = {
  discussionsController,
};
