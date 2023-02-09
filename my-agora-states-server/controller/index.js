const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // res.send("TODO:");
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // res.send("TODO:");

    const { id } = req.params; // 문자열로 받아옴

    if (id) {
      const filterDiscussion = discussionsData.filter((userdata) => {
        return userdata.id === +id; // 문자열 id 이기 때문에 숫자로 바꿔주기 Number(id) 이렇게했는데 +도 가능하다 하신다
      });
      if (filterDiscussion.length === 0)
        return res.status(404).send("니 잘못이야");
      else return res.status(200).json(filterDiscussion[0]); // 배열로 나오길래 [0] 넣어줌
    }
  },
};

module.exports = {
  discussionsController,
};
