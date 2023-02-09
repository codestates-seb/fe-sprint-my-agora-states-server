const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // res.send('TODO:')
    return res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // res.send('TODO:')
    const { id } = req.params
    let list = discussionsData.filter(el => { return el.id === Number(id) });
    list.length ? res.status(200).json(list[0]) : res.status(404).json(list);
  }

};

module.exports = {
  discussionsController,
};
