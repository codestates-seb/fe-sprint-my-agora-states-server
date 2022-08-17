const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
    //res.status(200).send('fe-sprint-my-agora-states-server');
    //findAll
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    //요청으로 들어온 id와 일치할 경우 상태코드 200
    //요청으로 들어온 id와 일치하지 않을 경우 상태코드 4
    const stat = req.params.id;

    const data = discussionsData.filter(discuss => discuss.id === Number(stat))

    if (data.length !== 0) {
      return res.status(200).json(data[0]);
    } else {
      return res.status(404).end();
    }
  }

};

module.exports = {
  discussionsController,
};
