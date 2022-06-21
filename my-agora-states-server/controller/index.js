const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData);

    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.

    const data = discussionsData.filter((el) => {
      return Number(req.params.id) === el.id; // 숫자끼리 비교해야되서 Number()
    });
    // discussionsData 배열 안의 객체를 하나하나 조회하면서 path parameter id를 가진 discussion을 찾아서 data에 할당한다.

    if (data.length !== 0) {
      // 찾는 id가 data에 있으면 200을 응답.
      return res.status(200).json(...data); // data[0]
    } else {
      return res.status(404).json('Not Found!'); // 없다면 404를 응답하면서 'Not Found!' 에러 표시
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
