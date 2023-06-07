const { agoraStatesDiscussions } = require("../repository/discussions");
// agoraStatesDiscussions를 가져온다

const discussionsData = agoraStatesDiscussions;
//discussionsData에 agoraStatesDiscussions 할당

const discussionsController = {
  findAll: (req, res) => {
    //findAll 메서드에 매개변수로 req, res를 넣어준다.
    if (req.query.query) {
      //query 파라미터가 존재하는지 확인한다.
      const filteredDiscussions = discussionsData.filter((discussion) => {
        return discussion.title.toUpperCase().includes(req.query.query.toUpperCase())
      }); //discussionsData 에서 title에 query가 포함된 discussions를 필터링 후 filteredDiscussions에 저장
      return res.status(200).json(filteredDiscussions) 
    } //필터링된 discussions를 JSON 형식으로 응답한다.
    res.status(200).send(discussionsData)    // query 없으면 전체 데이터
  }, //discussionsData를 응답한다.

  // [GET] /discussions/:id 요청을 수행 (요청으로 들어온 id와 일치하는 discussion을 응답)
  findById: (req, res) => {
    const { id } = req.params;
    const found = discussionsData.find((d) => d.id === Number(id));
    if (found) {
      return res.status(200).json(found);
    } else {
      return res.status(404).send("Not found");
    }

    if (!isNaN(idNumber)) {
      const discussion = discussionsData.find((discussion) => discussion.id === idNumber);

      if (discussion) {
        const { id, title, url, author, bodyHTML, avatarUrl } = discussion;
        return res.status(200).json({ id, title, url, author, bodyHTML, avatarUrl });
      } else {
        return res.status(404).json(`There is no discussion with ID (${idNumber}).`);
      }
    } else {
      return res.status(400).json(`Invalid ID: ${id}`);
    }
  },

  // [POST] /discussions 요청을 수행
  create: (req, res) => { //creat 메서드 정의 후 req, res 매개변수로 받음.
    const discussionInfo = {...req.body, "id" : Math.random()} //req.body를 펼쳐서 discussionInfo 객체를 생성하고, id에는 무작위 숫자를 할당.
    discussionsData.unshift(discussionInfo)//discussionInfo 를 discussionsData 배열의 맨 앞에 추가.
    return res.status(201).json(discussionInfo)  //discussionInfo를 JSON 형식으로 응답(상태코드 = 201)
  },

  // [PUT] /discussions/:id 요청을 수행
  update: (req, res) => {
    const {id} = req.params; // req.params에서 id값을 추출하여 id 변수에 할당
    const idNumber = Number(id) // idNumber 변수에 숫자형으로 변환하여 할당
    const bodyData = req.body; // 업데이트 희망하는 데이터

    if (id) { //id 값 존재여부 확인
      const filteredDiscussionsById = discussionsData.filter((discussion) => discussion.id === idNumber ) 
      //discussionsData에서 id가 idNumber와 일치하는 discussions를 필터링, filteredDiscussionsById 에 저장.
      if (filteredDiscussionsById.length === 0) {
        return res.status(404).json(`there is no posting by Id(${id}) you were searching for`)
        //필터링된 discussions가 없는경우 404상태코드와 에러 메시지를 응답
      }
      filteredDiscussionsById[0] = {...filteredDiscussionsById[0], ...bodyData}
      //filteredDiscussionsById 의 첫번째 요소를 업데이트 하고자 하는 bodyData로 덮어씌운다.
      return res.status(200).json(filteredDiscussionsById[0])
      //업데이트된 discussions를 JSON형식으로 응답 상태코드200
    } 
  },

  // [DELETE] /discussions/:id 요청을 수행
  deleteByPostingId: (req, res) => {
    const {id} = req.params; // req.params에서 id값을 추출하여 id 변수에 할당
    const idNumber = Number(id) // idNumber 변수에 숫자형으로 변환하여 할당
    if (id) { // id 존재여부 확인
      const filteredDiscussionsById = discussionsData.filter((discussion) => discussion.id === idNumber ) 
      //discussionsData 에서 id가 idNumber와 일치하는 discussions를 필터링하여 filteredDiscussionsById에 저장한다
      if (filteredDiscussionsById.length === 0) {
        return res.status(404).json(`there is no posting by Id(${id}) you were searching for`)
        //필터링된 discussions가 없는경우 404상태 코드와 에러 메시지를 응답한다.
      }
      discussionsData = discussionsData.filter((discussion) => discussion.id !== idNumber )
      //discussionsData에서 id가 idNumber와 일치하지 않는 discussions만 남기고 재할당한다.
      return res.status(200).json(filteredDiscussionsById[0])  
      //filteredDiscussionsById[0]을 JSON형식으로 응답.
    } 
  }

};

module.exports = {
  discussionsController,
};