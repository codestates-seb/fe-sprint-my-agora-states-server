const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.

    const { id } = req.params;

    // discussionsData.filter((data) => data.id === Number(id) 의 length가 0이면 status(404)
    const responseData = discussionsData.filter((data) => data.id === +id);

    return responseData.length
      ? res.status(200).send(responseData[0])
      : res.status(404).send('일치하는 데이터가 없습니다.');
  },
};

module.exports = {
  discussionsController,
};
