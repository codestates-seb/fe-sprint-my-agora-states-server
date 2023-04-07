const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

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
    
  }

};

module.exports = {
  discussionsController,
};
