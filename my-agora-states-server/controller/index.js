const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    if(Object.keys(req.query).length===0){
      return res.status(200).json(discussionsData)
    }
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params
    //디스터션데이터에서일치하는것을 필터해서 저장해주고 그것을 리턴해줌
    let filteredData = discussionsData.filter((el)=>{
      return el.id === Number(id)
    })
    if(filteredData.length===0){
      return res.status(404).json("찾는 아이디 음슴")
    }else{
      return res.status(200).json(filteredData[0])
    }
    
  }

};

module.exports = {
  discussionsController,
};
