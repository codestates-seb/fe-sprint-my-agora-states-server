const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    console.log(typeof discussionsData[0].id);
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    //일치하면
    const idx = discussionsData.findIndex((el) => el.id === parseInt(id));
    const filteredId = discussionsData.filter((el) => el.id === parseInt(id));
    // console.log(id);
    // console.log(idx);
    // console.log(discussionsData[idx].id);
    // if (discussionsData[idx].id === parseInt(id)) {
    console.log(filteredId);
    //좀더 짧게 만들어보기(삼항 연산자)
    filteredId.length !== 0
      ? res.status(200).json(...filteredId)
      : res.status(404).send("Not Found");

    // // 처음 구현
    // if (filteredId.length !== 0) {
    //   console.log("haha");
    //   return res.status(200).json(...filteredId);
    // } else {
    //   console.log("hello");
    //   return res.status(404).send("Not Found");
    // }

    // console.log(typeof id);
    // console.log(filteredId);
    // console.log("a");
    //일치하지 않으면
  },
};

module.exports = {
  discussionsController,
};
