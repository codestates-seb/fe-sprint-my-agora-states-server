const { agoraStatesDiscussions } = require("../repository/discussions"); // 데이터가 담겨있음
const discussionsData = agoraStatesDiscussions; 

const discussionsController = {
  //[GET 요청 /discussions]
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    
    return res.status(200).json(discussionsData); //모든 데이터목록을 응답으로 보내줌.
  },

  //[GET 요청 /discussions/:id]
  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // req.query를 이용하면 될 것 같음
    const { id } = req.params; // 첫번째 문제 === id 값이 undefined로 들어온다..  => 서버를 2개 켜놓아서 id가 충돌한 것 같다.. 서버 끄니까 해결완료
    console.log(typeof +id) //id가 string으로 들어온다.

      let filteredId = discussionsData.find((el) => { // id가 같은 요소를 찾으면 그 요소를 바로 리턴한다 (filteredId 는 객체)
        return el.id === +id;   // 두번째 문제 = 맞는 코드를 작성해도 필터가 안되어 빈 배열만 리턴함.. => req.params.id의 타입이 string으로 들어와서 그런거였음 
      });
      console.log(filteredId);
    if (!filteredId) {
      // 필터되어 나온 값이 없으면(여기서는 undefined 일 것이다)
      return res.status(404).send(`id:${id}와 일치하는 데이터가 존재하지 않습니다.`); //404 응답코드
    } else {
      return res.status(200).json(filteredId); // find 메서드를 사용하면 조건을 만족하는 첫번째 값이 바로 출력된다.
    }
  },
};

module.exports = {
  discussionsController,
};
