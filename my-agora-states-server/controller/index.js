const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const filteredData = discussionsData.find(
      (el) => el.id === parseInt(req.params.id)
    );

    if (filteredData) {
      res.json(filteredData);
    } else {
      res.status(404).send(`${req.params.id}와 일치하는 데이터가 없습니다.`);
    }
  },

  // findById: (req, res) => {
  //   // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
  //   const { id } = req.params;

  //   const filteredId = discussionsData.find((el) => el.id === parseInt(id));
  //   if (filteredId) {
  //     return res.status(200).json(filteredId);
  //   } else {
  //     return res.status(404).send(`${id}와 일치하는 데이터가 없습니다.`);
  //   }
  // },
};

module.exports = {
  discussionsController,
};
