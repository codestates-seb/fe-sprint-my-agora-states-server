const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params; // req.params를 통해 원하는 키 값 빼오기
    // find() => 판별식을 통과하는 첫 번째 요소를 찾는 순간 바로 리턴
    // filter() => 해당되는 요소를 모두 찾아 배열로 리턴함(하나 뿐이여도 배열)
    // id는 고유한 값이니 find() 사용, filter() 사용 시 filteredList[0] 으로 응답해줘야 함
    const filteredList = discussionsData.find((data) => {
      return data.id === Number(id); // id가 문자열로 들어와서 숫자타입으로 변환 후 비교
    });
    if(filteredList) { // 찾은 요소가 있으면 상태코드 200, 바디는 해당 데이터 응답
      return res.status(200).json(filteredList);
    } else { // 찾은 요소가 없으면 상태코드 404와 함께 응답
      return res.status(404).send('일치하는 id가 없습니다.')
    }
  },
};

module.exports = {
  discussionsController,
};
