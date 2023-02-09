const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    //id와 일치하는 데이터가 존재하지 않을 경우, 404 오류 메세지
    const id= Number(req.params.id);
    //console.log(typeof id) -> string이므로 Number타입으로 변경
    const [listId] = discussionsData.filter((item) => item.id === id)
    if(listId) return res.status(200).json(listId);
    return res.status(404).send('Not Found!');
  },
};
module.exports = {
  discussionsController,
};
