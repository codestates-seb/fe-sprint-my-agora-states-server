const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params;
    const resData = discussionsData.filter((v) => {
      return v.id === Number(id);
    });

    if(resData.length) {
      res.json(resData[0]);
    } else {
      res.status(404).send('Bad Request, ID is unknown');
    }
  }

};

module.exports = {
  discussionsController,
};
