const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // res.send('TODO:')
    return res.status(200).json(discussionsData);
  },

  /*   findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // res.send('TODO:')
    const { id } = req.params;
    const filterId = discussionsData.filter((el) => {
      return el.id === Number(id);
    });
    if (filterId.length !== 0) return res.status(200).json(filterId[0]);
    else return res.status(404).json("Not found!");
  },
}; */

  // find 사용
  findById: (req, res) => {
    const { id } = req.params;
    const found = discussionsData.find((el) => el.id === Number(id));
    if (found) return res.status(200).json(found);
    else return res.status(404).json("Not found!");
  },
};

module.exports = {
  discussionsController,
};
