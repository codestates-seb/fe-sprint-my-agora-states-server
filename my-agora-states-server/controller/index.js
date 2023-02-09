const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // res.send(discussionsData);
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    let list = discussionsData.filter((el) => el.id === Number(id)); // req.pqeams는 string타입이라서
    console.log(list);
    if (list.length === 0) {
      return res.status(404).json("Not FSound");
    } else {
      return res.status(200).json(list[0]);
    }
  },
};

module.exports = {
  discussionsController,
};
