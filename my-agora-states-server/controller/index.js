const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다. 
    const { id } = req.params;

    let filteredData = discussionsData;

    filteredData = filteredData.filter((data) => {  
      return data.id === Number(id);
    });

    
    //객체 형태로 전달해야하는데, filteredData 는 배열이다.
    if(filteredData.length > 0){
      return res.status(200).json(filteredData[0]);
    }else{
      return res.status(404).send(null);
    }
  },

   //추가
   create: (req, res)=>{
    const id = discussionsData.length+1;
    const bodyData = req.body;
    console.log('bodyData:',bodyData);
    let newDiscussion = { id , ...bodyData };
    discussionsData.unshift(newDiscussion)
    return res.status(201).json(newDiscussion);
  },

  //수정
  update: (req, res)=>{
    const { id } = req.params;
    const bodyData = req.body;

     // TODO:
    //  console.log("req.params", req.params);
    //  console.log("req.body", req.body);

    // const updatedId = discussionsData.findIndex()
    let filteredData = discussionsData;
    filteredData = filteredData.filter(data => data.id === id);
     
    if(bodyData){
      for(let key in bodyData){
        filteredData[0][key] = bodyData[key];
       }
    }
    return res.status(200).json(filteredData[0]);
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
