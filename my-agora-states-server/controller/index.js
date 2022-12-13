const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;


const discussionsController = {
  findAll: (req, res) => {
    return res.status(200).json(discussionsData)
  },

  // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다
  findById: (req, res) => {
    const { id } = req.params;
   
    console.log('id, ' + id) //output --> 2
    console.log('req.params, '+ req.params) //output --> [object Object]

    let filteredData = discussionsData;
    if(req.params){
      filteredData = filteredData.filter((data) => {
        //console.log('data.id, ' + data.id) //output --> id들 순회
        //! 받은 id는 string 이라는 점에서 막힘! 
        return data.id === Number(id);
      })
    }
    if(filteredData.length !== 0){
      return res.status(200).json(filteredData[0])
    } else { 
      return res.status(404).send('Not Found!');
    }
  }
};

module.exports = {
  discussionsController,
};
