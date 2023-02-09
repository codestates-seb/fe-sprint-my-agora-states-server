const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
      console.log('discussions success')
      return res.status(200).json(discussionsData);

      
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    // console.log(typeof(req.params.id)) // -> string
    // console.log(Number(req.params.id)) // -> 20
    // 클라이언트가 요청한 id의 값을 필터로만들어 discussionData를 걸러내자.

    const filtered = discussionsData.filter((list) => list.id === Number(req.params.id));

    // 걸러낸 discussionData에 데이터가 있으면 200
    if (filtered.length !== 0) {
      return res.status(200).json(filtered[0]);
    // 걸러낸 discussionData에 데이터가 없으면 404
    } else {
      return res.status(404).end(`죄송합니다람쥐`);
    }
  }
}

module.exports = {
  discussionsController,
};
