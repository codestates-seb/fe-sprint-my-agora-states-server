const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    //* 일치하는 데이터가 존재하는 경우 200과 함께 응답
    //* 존재하지 않는 경우 404와 함께 응답
    const { id } = req.params;
    let list = discussionsData.filter(el => el.id === parseInt(id));
    if(list.length === 0) {
      return res.status(404).send('결과가 없습니다.')
    } else {
    return res.status(200).send(list[0]);
    }
  }

};

module.exports = {
  discussionsController,
};
