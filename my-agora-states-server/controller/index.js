const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    //? GET 방식으로 들어온 요청에서 쿼리스트링을 통해 파라미터를 전송
    //? req.paran()을 이용
    const { id } = req.params;

    //! res.send([body])과 res.json([body])의 차이점
    //? res.send([body]) => 들어온 데이터를 파악해서 이에 알맞게 Content-Type 지정
    //? res.json([body]) => json 형태로 변환 후 send
    //? send는 보낼 수 있는 종류의 제한이 더 많다

    //! filter 사용
    const filterId = discussionsData.filter((ele) => ele['id'] === Number(id));
    //? id가 일치하다면 배열의 요소가 있을 것
    return filterId.length
      ? res.status(200).json(filterId[0]) //? true => 상태 코드 200과 함께 응답
      : res.status(404).send('id가 일치하지 않습니다!'); //? false => 상태 코드 404과 함께 응답

    //! find 사용
    // const filterId = discussionsData.find((ele) => ele['id'] === Number(id));
    // //! id가 일치하다면 true
    // return filterId
    //   ? res.status(200).json(filterId) //? true => 상태 코드 200과 함께 응답
    //   : res.status(404).send('id가 일치하지 않습니다!'); //? false => 상태 코드 404과 함께 응답
  },
};

module.exports = {
  discussionsController,
};
