const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // status로 상태 코드 보내주기
    // json일 때랑 send일 때랑 둘 다 되네?
    res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    let {id} = req.params;
    // console.log(id);
    // console.log(typeof id);
    // id와 일치하는 discussion filter 하기
    // find가 아니라 filter여서 그런가..
    // 멍청이.... status를 staus로 써놨음.
    let filteredList = discussionsData.filter((data)=> {return data.id === Number(id);});
    // 왜 undefined지? 
    console.log(filteredList);
    // res.status(200).send(filteredList);
    if(filteredList.length !== 0){
      return res.status(200).send(...filteredList); // 존재하는 경우 200과 함께 응답
    }else{
      return res.status(404).send(...filteredList);
    }
  }

};

module.exports = {
  discussionsController,
};
