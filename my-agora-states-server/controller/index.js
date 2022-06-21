const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    const { limit, page } = req.query;
    let responseBody = discussionsData;
    if (!limit && !page) {
      return res.status(200).json(responseBody);
    }
    return res.status(404).send('Not found');
  },

  findById: (req, res) => {
    const { id } = req.params;
    const found = discussionsData.find((d) => d.id === Number(id))
    // readability is the king => 가독성이 짱이다.
    // 서버에 있는 데이터의 아이디와 요청의 path parameter id가 같은지 확인하다.
    // id => string => Number : 약간 하 자바스크립트..
    if (found) {
      return res.status(200).json(found);
      // return 하면 그 함수 실행이 확실히 종료됩니다. 
        // 그냥 send, json해도 expressjs에서 알아서 잘 해줍니다.
        // 근데.. 전 불안해요 ..
    } else {
      return res.status(404).send('Not found');
    }
    // TODO: path parameter id를 가진 discussion을 응답합니다.
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
