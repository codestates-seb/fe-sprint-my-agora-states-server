const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // res.send(discussionsData) 보다 아래 코드가 더 적절한 이유.
    // 응답코드 200 제공하여 성공적으로 처리 알림, JSON으로 반환하여 클라이언트에서 더 쉽게 파싱하고 처리 가능.
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // id 값이 req.params로 들어오며, 이 값은 문자열 형태로 들어오게 된다.
    // find 메소드를 사용할 때 id 값을 비교할 때 문자열 값에서 숫자 값으로 변환해주어야 한다. 
    // 그렇기 위해서 Number() 함수를 사용하여 id 값을 숫자로 변환하여 사용한다.
    let { id } = req.params;
    const sameData = discussionsData.find(
      same => same.id === Number(id)
    );
    if (sameData) return res.status(200).json(sameData);
    else return res.status(404).json("일치하는 id가 존재하지 않습니다"); 
  },
};

module.exports = {
  discussionsController,
};
