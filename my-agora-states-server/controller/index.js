const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions; // array

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    // console.log(typeof id); // string

    const filterdDiscussionsData = discussionsData.filter(
      (discussion) => discussion.id == id
    );

    if (filterdDiscussionsData.length === 0) {
      return res.status(404).send("요청하신 id에 해당하는 데이터가 없습니다.");
    }

    return res.json(filterdDiscussionsData[0]);
  },

  create: (req, res) => {
    console.log("form 데이터 전송 테스트2");
    console.log(req.params);
    return res.status(201).end();
  },
};

module.exports = {
  discussionsController,
};
