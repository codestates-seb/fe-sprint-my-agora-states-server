const { reset } = require("nodemon");
const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    res.status(200).json(discussionsData)
    //send, json의 차이 공부하기!
  },

  findById: (req, res) => {
    //들어오는 id를 있는 경우와 없는 경우 2개로 나눠주면 된다!
    if(req.params){ //있는지 확인
     const bin = discussionsData.find((it)=>it.id === Number(req.params.id)) 
     if(bin){
      return res.status(200).json(bin)
    } else {
      throw res.status(404).send('멈춰') 
     }
    }
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    const {title, author, bodyHTML, avatarUrl} = req.body;
    const id = discussionsData.length + 1
    const url = "http://localhost:3001/" + id
    
    const newData = {
      id,
      createdAt: "2022-05-15T09:28:00Z",
      title,
      url,
      author,
      answer: null,
      bodyHTML,
      avatarUrl,
    }
    discussionsData.unshift(newData)
    return res.status(200).json(discussionsData)
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    const idx = discussionsData.findIndex((el)=>el.id === Number(req.params.id))
    const updated = {
      ...discussionsData[idx],
      ...req.body,
      updatedAt: new Date().toISOString() 
    }
    if(idx !== -1){
      discussionsData.splice(idx, 1, updated)
      return res.status(200).json(discussionsData)
    } else {
      return res.status(404).send("돌아가")
    }
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
      const idx = discussionsData.findIndex((it)=>it.id === Number(req.params.id))
      if(idx !== -1){
      discussionsData.splice(idx, 1)
      return res.status(200).json(discussionsData)
    } else {
      return res.status(404).send('Not found')
   }
  },
};

module.exports = {
  discussionsController,
};
