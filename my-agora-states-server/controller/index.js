const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(discussionsData);
    console.log('응답했어요');
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.

    // res.send(req.params.id);
    // res.json(discussionsData[1].id);
    
    // console.log(filteredId);
    // console.log(typeof parseInt(req.params.id))
    // console.log(typeof discussionsData[0].id)
    
    
    let filteredId = discussionsData.filter(el => parseInt(req.params.id) === el.id);
    if(filteredId.length === 0) {
      // res.status(404)뒤에 .end()를 붙여줘야함
      // 근데 왜?
      return res.status(404).end('일치하는 아이디가 없어요');
    } else {
      // 구조분해할당말고 방법없나?
      // return res.status(200).json(filteredId[0]);
      const [{id, createdAt, updatedAt, title, url, author, answer, bodyHTML, avatarUrl}] = filteredId;
      return res.status(200).json({id, createdAt, updatedAt, title, url, author, answer, bodyHTML, avatarUrl});
    }

  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
  },
};

module.exports = {
  discussionsController,
};
