const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
const { v4:uuid } = require('uuid');
const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.

    // res.send('TODO:')
    return res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // res.send('TODO:')
    const { id } = req.params;
    let filteredData = discussionsData;

    filteredData = filteredData.filter((data) => {  
      return data.id === Number(id);
    });
    console.log(typeof filteredData, Array.isArray(filteredData)); 

    //객체 형태로 전달해야하는데, filteredData 는 배열이다.
    
    if(filteredData.length > 0){
      return res.status(200).send(filteredData[0]);
    }else{
      return res.status(404).send(null);
    }
    
  },

  //추가
  create: (req, res)=>{
    
    const uuid = uuid();
    const { id, title, author } = req.body;
    let filteredData = discussionsData;
    if(filteredData.find((data) => data.id === id)){
      return res.status(409).json("It's 중복");
    }else{
      filteredData.unshift({uuid, title, author});
      res.location(`/discussions/${uuid}`);
      return res.status(201).json(filteredData[0]);
    }

    
  },

  update: (req, res)=>{
1
  },

  // 삭제
  deleteById: (req, res)=>{
    const { id } = req.params;
    let filteredData = discussionsData;
    filteredData = filteredData.filter(data => data.id !== id);

    return res.status(204).json("No content!");
  }

};

module.exports = {
  discussionsController,
};
