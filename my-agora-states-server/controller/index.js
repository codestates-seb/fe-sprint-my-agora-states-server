const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions; // 불러온 데이터 재할당

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params; // id 요청
    let list = discussionsData.filter(el => Number(id) === el.id); // 요청 id와 일치하는 id를 찾아 필터링한 새로운 배열을 list에 할당
    if (list.length > 0) {
      return res.status(200).json(list[0]); // 일치할 경우 json으로 응답
    } else {
      return res.status(404).json('404 Not Found');
    }
  }
};

module.exports = {
  discussionsController,
};
