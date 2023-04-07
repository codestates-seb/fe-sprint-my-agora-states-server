const { agoraStatesDiscussions } = require("../repository/discussions");
let discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    // discussionsData 안에서 같은 id를 찾는다  Number로 지정
    const data = discussionsData.find(
      (discussion) => discussion.id === Number(id)
    );
    if (data) {
      console.log(data);
      return res.status(200).json(data);
    } else {
      return res.status(404).send("Not Found");
    }
  },
};

module.exports = {
  discussionsController,
};
