const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    const data = discussionsData.slice();
    res.status(200).send(data);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const data = discussionsData.filter((el) => el.id === Number(id));
    if (data.length !== 0) {
      //내가 filter를 사용했기 때문에 data는 배열로 받아짐.
      //배열은 !== []로 하면 제대로 비교 안 돼서 .length로 조건 만들어줘야 함.
      res.status(200).send(data[0]);
    } else {
      res.status(404).send("Not Found");
    }
  },
};

module.exports = {
  discussionsController,
};
