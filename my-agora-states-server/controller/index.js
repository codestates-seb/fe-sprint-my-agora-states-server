const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    //typeof el.id number ":id"식으로 온다
    //filter를 쓰면 알될까? 왜 { id }는 스트링으로 올까????
    let result = discussionsData.find((el) => el.id === Number(id));
    if (result) {
      return res.status(200).send(result);
    } else {
      return res.status(404).json("error");
    }
  },
};

module.exports = {
  discussionsController,
};
