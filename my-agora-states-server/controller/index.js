const { agoraStatesDiscussions } = require("../repository/discussions");
const { merge } = require("../router/discussions");
const discussionsData = agoraStatesDiscussions;


const discussionsController = {
  // [GET]
  // 모든 discussions 목록을 조회
  findAll: (req, res) => {
    return res.status(200).json(discussionsData)
  },

  // [GET] 
  // 요청으로 들어온 id와 일치하는 discussion을 응답합니다
  findById: (req, res) => {
    const { id } = req.params;

    let filteredData = discussionsData;
    if(id){
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
