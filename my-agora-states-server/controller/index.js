const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions; // 아고라스테이츠 질문 목록

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const data = discussionsData.filter(data => {
      return data.id === Number(id)})

    if (data.length === 0) {
     // discussionsData에 해당 id와 일치하는 데이터가 존재하지 않는 경우, 상태 코드 404와 함께 응답을 보냅니다.
     // return res.status(404).send('일치하는 아이디가 없습니다')
      return res.status(404).send('일치하는 아이디가 없습니다')
    } else {
      // discussionsData에 해당 id와 일치하는 데이터가 존재하는 경우, 상태 코드 200과 함께 응답을 보냅니다.
      // return res.status(200).json(data)
      return res.status(200).send(data[0])
    }
    // 응답의 body 속성으로 id, title, url, author, bodyHTML, avatarUrl이 있어야 합니다.
    // discussionsData 중 해당 id와 일치하는 discussion을 응답으로 보냅니다.
      
  }
};

module.exports = {
  discussionsController,
};
