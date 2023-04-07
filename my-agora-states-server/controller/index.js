const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    let list = discussionsData;
    if (Object.keys(req.query).length === 0) {
      return res.status(200).send(list);
    }
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    let filteredList = discussionsData.filter((item) => {
      return item.id === Number(id);
    })
    if (filteredList.length === 0) {
      return res.status(404).send('Bad Request');
    } else {
      return res.status(200).send(filteredList[0]);
    }
  }

};

module.exports = {
  discussionsController,
};
