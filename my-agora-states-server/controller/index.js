const { agoraStatesDiscussions } = require("../repository/discussions"); // 데이터를 담은 변수
const discussionsData = agoraStatesDiscussions; // 데이터를 전달하기 위한 변수

// * 서버와 미들웨어를 구현할 때에는 항상 URI와 구조를 생각하자!
// * client request ===> middleware(cors 등 app.js 객체에서 설정) ===> router(페이지 불러오기 직전 render과정) ===> client response

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // * 1. 모든 discussion 목록을 응답? ===> uri에 query가 없음을 의미 // query는 { id : ... , name : ... } 구조!
    // * 따라서, 쿼리가 없을 경우 전체를 응답하는 코드를 작성
    if (Object.keys(req.query).length === 0) {
      // query를 요청했을 때 query에
      return res.status(200).json(discussionsData);
    }
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // * 2. id를 param으로 받을 때 controller에서 인지할 수 있는 객체로 정의해주기! (방식은 const 선언!)
    const { id } = req.params;
    // * 3. id에 따라 filter된 객체를 resultData에 담아주기
    let resultData = discussionsData.filter((dicussion) => {
      // 1) 데이터 배열에 있는 각각의 객체들을 filter메서드의 기능을 통해 순회하며
      // 2) filter 메서드의 기능을 통해 id가 일치하는 경우만!
      // 3) id를 조회할 때, 기본적으로 json형식이 string타입이기 때문에, Number타입으로 변화하여 조회!
      return dicussion.id === Number(id);
    });

    // * 4 최종 데이터를 status코드와 함께 send하기(뿌려주기?)
    if(resultData.length === 0) {
      // 1) resultData 배열에 담긴 객체가 없을 경우
      return res.status(404).json(`요청하신 내용을 찾을 수 없습니다`)
    } else {
      // 2) resultData 배열에 담긴 객체가 있을 경우
      return res.status(200).json(resultData[0])
    }
  },
};

module.exports = {
  discussionsController,
};
