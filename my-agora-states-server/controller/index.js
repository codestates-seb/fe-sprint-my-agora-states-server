const { agoraStatesDiscussions } = require("../repository/discussions");

const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // console.log(discussionsData)
    res.send(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params
    const filterdData = discussionsData.filter(el => el.id === Number(id))
    if (filterdData.length === 0) res.status(404).send('id가 일치하는 데이터가 존재하지 않습니다.')
    else res.send(...filterdData)
  }

};

module.exports = {
  discussionsController,
};
