const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // return res.state(200).json(discussionsData);
    res.send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params; // 이미 예약된(?) 값 // id라는 변수로 어떤 값이 들어올 것을 알고
    let filtered = discussionsData.filter((a) => a.id === Number(id)); // params는 문자열로 오니까 Number로 해줘야 돼

    if (filtered.length === 0) {
      return res.status(404).json("Not found");
    } else {
      return res.status(200).json(filtered[0]);
    }
    // res.send("TODO:");
  },
};

module.exports = {
  discussionsController,
};
