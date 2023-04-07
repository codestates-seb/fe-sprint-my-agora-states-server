const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions; //array

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // res.send('TODO:')
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // res.send('TODO:')
    const id = req.params.id;
    const data = discussionsData.filter(el => el.id === Number(id));
    if (data.length !==0) {
      res.status(200).json(data[0]);
    } else {
      res.status(404).end();
    }
  }
};

module.exports = {
  discussionsController,
};
