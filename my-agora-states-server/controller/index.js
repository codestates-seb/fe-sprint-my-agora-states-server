const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    // params는 숫자도 문자열로 가져오니 주의
    let newData = discussionsData.filter((tweet) => tweet.id === Number(id));
    // console.log(newData);
    if (newData.length !== 0) {
      // filter는 배열로 반환, 그래서 맞는 id가 없어도 빈배열로 나오기에 length !== 0으로 조건
      // 데이터도 [0]으로 풀어주고 보냄
      return res.status(200).send(newData[0]);
    } else {
      return res.status(404).send("No ID");
    }
  },
};

module.exports = {
  discussionsController,
};
