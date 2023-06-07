const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params; //http 요청의 url에서 id 값: string 형태 => id: 숫자 형태
    let filteredData = discussionsData.filter((discussion) => {
      return Number(id) === discussion.id;
    });
    // 필터링된 데이터가 없다면
    if (filteredData.length === 0) {
      return res.status(404).json("Cannot find");
    } else {
      // [0]??
      return res.status(200).json(filteredData[0]);
    }
  },
};

module.exports = {
  discussionsController,
};
