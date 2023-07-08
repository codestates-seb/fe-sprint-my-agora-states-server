const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // res.send('TODO:')
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // res.send('TODO:');
    const { id } = req.params;
    // params 는 string 타입으로 값이 들어옴으로 넘버로 변환해서 비교해줘야 한다
    // find 메소드는 배열의 첫번째 객체만 가리키며,
    // 사용한 이유는 같은 id(id는 고유함으로 하나만 존재) 를 가진 해당 객체만 가져오기 위함이다
    const idData = discussionsData.find(el => el.id === Number(id));

    if (idData) {
      res.status(200).json(idData);
    } else {
      res.status(404).send("is not found");
    }
  }
};

module.exports = {
  discussionsController
};
