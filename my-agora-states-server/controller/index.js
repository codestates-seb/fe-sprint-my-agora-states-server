const e = require("express");
const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params;
    let data = discussionsData.filter((el) =>{
      return el.id === Number(req.params.id)
    });
    if(data.length){ //필터된 값이 있으면 길이가 있을것이고, 그럼 일치하는 값이 있다는거
    res.status(200).send(...data); //왜 구조분해 할당..?  응답의 body 속성으로 id, title, url, author, bodyHTML, avatarUrl이 있어야 합니다.가 통과됨..
    //아마 객체로 필터되니까? 배열로 반환되서 구조분해로 쪼개서 보내는거이려나...
    }else{ //길이가 없으면, 요청으로 들어온 id와 일치하는 discussion이 없다는 거
     res.status(404).send("bad request");
    }
  }

};

module.exports = {
  discussionsController,
};
