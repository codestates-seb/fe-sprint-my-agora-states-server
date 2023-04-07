const { agoraStatesDiscussions } = require("../repository/discussions");
let discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const found = discussionsData.filter((data)=>{
      const { id } = req.params;
      return data.id===Number(id);
    });
    if(found.length>0){
        return res.status(200).send(found[0]);
    } else {
        return res.status(404).send("the discussion not exist");
    }
  },
  
  create: (req, res)=>{
    // 요청으로 들어온 데이터를 Discussion리스트에 추가합니다.
    const {name, createdAt, title, answer, bodyHTML} = req.body;
    const min = 100;
    const max = 10000000;
    const id = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(id);
    discussionsData.unshift({id, name, createdAt, title, answer, bodyHTML});
    return res.status(201).send(discussionsData[0]);
  },

  update: (req, res)=>{
    const { id } = req.params;
    const bodyData = req.body;
    const idxToUpdate = discussionsData.findIndex(data=>data.id === Number(id));
    discussionsData[idxToUpdate] = {...discussionsData[idxToUpdate], ...bodyData};
    return res.status(200).send(discussionsData[idxToUpdate]);
  },

  deleteById: (req, res)=>{
    const { id } = req.params;
    discussionsData = discussionsData.filter((data)=>data.id !== Number(id));
    return res.status(200).send(id);
  }

};

module.exports = {
  discussionsController,
};
