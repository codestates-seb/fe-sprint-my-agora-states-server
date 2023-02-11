const { agoraStatesDiscussions } = require("../repository/discussions");
let discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params
    let list = discussionsData.filter(el => { return el.id === Number(id) });
    list.length ? res.status(200).json(list[0]) : res.status(404).json(list);


    
  },

  
  // [PUT]요청 된 uuid 값과 동일한 uuid 값을 가진 데이터를 요쳥 된 Body 데이터로 수정합니다.
  update: (req, res) => {
    const bodyData = req.body;
    const { id } = req.params; 
    let indexNum; 
      for (i = 0; i < flights.length; i++) {
      if (discussionsData[i].id === Number(id)) {
        indexNum = i; 
      }
    }
    discussionsData[indexNum] = { ...discussionsData[indexNum], ...bodyData };
    return res.status(200).json(discussionsData[findIndex]); 
  },

  // [POST] 요청 된 데이터를 저장합니다.
  create: (req, res) => { 
    discussionsData = [req.body,...discussionsData];
    return res.status(200).json(req.body); 

  },



}

module.exports = {
  discussionsController,
};
