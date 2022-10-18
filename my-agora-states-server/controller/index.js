const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;

    const found = discussionsData.some(discussion => discussion.id === Number(id));

    if(found) {
      const fillterdDiscussionsData = discussionsData.filter(discussion => {
        return discussion.id == id;
      })
      return res.status(200).json(fillterdDiscussionsData[0]);
    }
    else {
      return res.status(404).send("해당 id와 맞는 디스커션이 없습니다.");
    }
  }

};

module.exports = {
  discussionsController,
};