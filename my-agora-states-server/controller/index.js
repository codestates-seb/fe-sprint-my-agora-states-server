const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // res.send('TODO:')
    return res.status(200).send(discussionsData)
    
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // res.send('TODO:')
    // const {id} = req.params;
    // const data = discussionsData.filter((value) => id === value.id); // filter 선택한 데이터만, 조건을 true 만족하는 것들 원본을 반환 
    // return res.status(200).json(data); //send - stringify를 직접 해주지 않은 상태 - 문자열x, json으로 감싸면 문자열로 바꿔준다.
    const {id} = req.params; //쿼리 string을 따오는 거라서 id의 타입이 string
    const data = discussionsData.filter((value) => (Number(id) === value.id))[0]; // filter 선택한 데이터만, 조건을 true 만족하는 것들 원본을 반환 + 1번째 인덱스 
    // didcussions 아이디를 하나만 조회하므로 
    // id의 타입까지 조회. id는 string, 그래서 Number로 바꿔줌
    // console.log(data) // 빈 배열 
    if (data) {
      res.status(200).json(data); //send - stringify를 직접 해주지 않은 상태 - 문자열x, json으로 감싸면 문자열로 바꿔준다.
    } else {
      res.status(404).json(data);
    }
    }
   }

    // if / else로 분기처리




module.exports = {
  discussionsController,
};
