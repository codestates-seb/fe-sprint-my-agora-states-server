const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;


const discussionsController = {
  //'/'경로로 get 요청이 들어왔을때, findAll함수를 사용하여 요청처리
  findAll: (req, res) => {
    // 1. TODO: 모든 discussions 목록 응답 // 예시) get /discussions?q=nodejs&page=2
    /*req.query 형태
    {
      q: 'nodejs',
      page: '2'
    }
    */
    // 요청의 쿼리의 키가 존재하지 않을때, 모든 디스커션데이터를 보여주기
    if(Object.keys(req.query).length === 0){
      return res.status(200).json(discussionsData)
    }
  },

  findById: (req, res) => {
    // '/:id' 경로로 get 요청이 들어왔을때, findById라는 함수를 사용하여 요청처리
    // 2. TODO: 요청으로 들어온 id와 일치하는 discussion 응답
    //예시)http://localhost:3000/users/123 이면 
    //req.params 는 {id: '123'}

    //먼저, req.params의 id 속성을 추출해서 선언한다
    const {id} =req.params
    const filteredData = discussionsData.filter((discussion)=>{
      return discussion.id === Number(id) // 콜백함수 {} 안에서 return 꼭쓰기
    })
    //discussionsData 에 필터 메서드를 걸어 디스커션의 id와 입력된 id가 같은 데이터들로 새로운 배열을 만듦
    // 이때, 입력된 id가 문자열로 인식되니 숫자로 바꿔주기
   //req.params.id가 string 형태로 들어온다. Number로 변환
    if(filteredData.length === 0){
      return res.status(404).json('아이디를 찾을 수 없음')
    }else{
      return res.status(200).json(filteredData[0])
    }
     //필터된 데이터가 없다면, 배열이니 0으로
     // 아이디를 찾을 수 없다고 json형태로 상태코드와 함께 응답
     //필터되어서 나온 게 있다면   // 나온게 있다면, 어차피 같은 id가 없으니 배열 중 0번째를 뽑기
      //[0]으로 뽑아와야만 출력이 된다.
    },

  //[PUT] /discussions/:author
  // 요청된 author값과 동일한 author값을 가진 디스커션 데이터를 요청된 body 데이터로 수정
  replaceByAuthor: (req, res) => {
  const {author} = req.params
  const bodyData = req.body
  const beUpdatedIdx = discussionsData.findIndex((discussion)=>{
   return discussion.author === author
  })
  const updatedDiscussion = {...discussionsData[beUpdatedIdx],...bodyData}
  discussionsData.splice(beUpdatedIdx, 1, updatedDiscussion);

  return res.status(200).json(updatedDiscussion);
}
}

 
module.exports = {
  discussionsController,
};


//첫 번째 수정된 부분은 res.status(200).JSON(discussionsData)에서 JSON 대문자를 소문자 json으로 변경한 것입니다. 
//json은 res 객체의 메서드가 아니기 때문에 대문자로 작성하면 실행되지 않습니다.

/*if(Object.keys(req.query).length === 0)와 if(req.query.query === undefined)는 다르게 동작합니다.

if(Object.keys(req.query).length === 0)은 req.query 객체에 속성이 하나도 없을 때 true를 반환합니다. 따라서 쿼리 스트링이 전혀 없는 경우에 사용할 수 있습니다.

반면에 if(req.query.query === undefined)은 query라는 이름의 속성이 없을 때 true를 반환합니다. 이 경우 쿼리 스트링이 있더라도 query라는 이름의 속성이 없으면 true를 반환하므로 원하는 대로 동작하지 않습니다.

따라서 if(req.query.query === undefined)는 쿼리 스트링에서 query라는 이름의 속성을 확인하는 경우에만 사용해야 합니다. 만약 query가 아닌 다른 속성을 확인하려면 그 속성의 이름을 사용해야 합니다.

따라서 if(Object.keys(req.query).length === 0)를 사용하는 것이 더 안전합니다.




친절한 지은씨
위의 코드에서 'if(Object.keys(req.query).length === 0)' 대신 'if(req.query === undefined)' 라고 쓰면 안될까?
if(Object.keys(req.query).length === 0)과 if(req.query === undefined)는 다르게 동작합니다.

if(Object.keys(req.query).length === 0)은 req.query 객체에 속성이 하나도 없을 때 true를 반환합니다. 반면에 if(req.query === undefined)은 req.query 객체 자체가 undefined일 때 true를 반환합니다.

따라서 if(req.query === undefined)는 req.query 객체가 undefined일 때만 작동하므로 쿼리 스트링이 전혀 없는 경우에는 작동하지 않습니다.

따라서 if(Object.keys(req.query).length === 0)를 사용하는 것이 더 안전합니다.





Regenerate response */