const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;

    const filteredData = discussionsData.filter((data) => {
      return data.id === Number(id);
    });

    //discussionsData에 해당 id와 일치하는 데이터가 존재하지 않는 경우
    if (filteredData.length === 0) {
      return res.status(404).json(`${id} Not Found`); //404 응답
    } else {
      return res.status(200).json(filteredData[0]);
    }
  },
};

module.exports = {
  discussionsController,
};
