const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    /* 만약 필터링된 배열의 길이가 0이 아니라면 (즉, id가 일치하는 것이 있다면)
       HTTP 상태 코드 200과 해당 객체(filtered[0])를 JSON 형식으로 응답합니다.
       그렇지 않으면 HTTP 상태 코드 404와 "Not found" 메시지를 JSON 형식으로 응답합니다.*/
    const { id } = req.params;
    const filtered = discussionsData.filter((el) => el.id === Number(id));
    filtered.length
      ? res.status(200).json(filtered[0])
      : res.status(404).json("Not found");
  },
  /* 왜 Number(id)를 할까?
  id는 매개변수로부터 전달되는 값입니다. 일반적으로, 이 값은 URL 경로 매개변수에서 전달됩니다.
  URL 경로 매개변수는 문자열 형식으로 전달되므로, 이 값을 숫자로 변환하기 위해 Number(id)를 
  사용하는 것이 좋습니다.
  필터링 과정에서 el.id === id가 아닌 el.id === Number(id)로 비교하는 것이 관련된 연산이 
  올바르게 수행되도록 합니다. */
};

module.exports = {
  discussionsController,
};
