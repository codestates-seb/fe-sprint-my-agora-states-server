const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // res.send(discussionsData) 보다 아래 코드가 더 적절한 이유.
    // 응답코드 200 제공하여 성공적으로 처리 알림, JSON으로 반환하여 클라이언트에서 더 쉽게 파싱하고 처리 가능.
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    let { id } = req.params;
    const sameData = agoraStatesDiscussions.find(
      (same) => same.id === Number(id)
    );
    if (sameData) return res.status(200).json(sameData);
    else return res.status(404).json("일치하는 id가 존재하지 않습니다"); 
  },
};

module.exports = {
  discussionsController,
};
