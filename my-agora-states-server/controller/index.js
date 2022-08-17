const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다. 
    // test 자체가 send설정하지 않으면 jest 테스트가 멈춰버림..! 
   res.status(200).send(discussionsData)
  }
  ,

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // id는 고유하니까 req.params

    const {id} = req.params;

  // console.log({id}); // id:'42' 문자열이네..?
  //console.log(typeof id); 

  // 콘솔찍어보니까.. req.params가 문자열로 받아와지니까 discussions.filter한거랑 
  // 비교하려면 문자열을 숫자로 돌려야함
  // 1. filter로 했을때
  // const data = discussionsData.filter((el) => {
  //     return  Number(id) === el.id
  // })// req.params.id랑 el.data같으면 falsed인게 data에 담김
  // // 만약 data가 트루면 200 이어서 length는 0이 아닐것이고
  // // data가 false면 length는 0이겠지?
  // if(data.length !== 0) {
  //   // ...data로 풀어서 다 조회되도록..? 
  //   return res.status(200).send(...data);
  // } else {
  //   return res.status(404),send("오류");
  // }
   
  // }
  // 2.  find로 했을때
 // arr.find는 주어진 함수를 만족하는 첫번째 요소의 값을 반환!! 
 // arr.filter은 true인 값만 걸러서 반환 
  const found = discussionsData.find(data => data.id === Number(id));
  if(found){
    res.status(200).send(found);
  }else{
    res.status(404).send('Not found');
  }
}
};

module.exports = {
  discussionsController,
};
