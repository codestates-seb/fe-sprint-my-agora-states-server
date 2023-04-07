const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
    //성공했다는 상태코드 200과 함께 discussinData(목록)전체를 돌려줌.
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    //req.params로 받아야겠군.
    const {id} = req.params;
    //params로 들어오면 string 타입.
      let filtered = discussionsData.filter(list=> list.id ===Number(id));
      //꼭 number로 바꿔줘야 한다. 
      if(filtered.length !== 0 ){
        return res.status(200).json(filtered[0]);
        //0번째를 추출하면 되고 아니면 안되네 무슨 차이지...        
      } else {
        return res.status(404).json('Incorrect request')
      }
  },

  findByName: (req, res) => {
    // TODO: 요청으로 들어온 name와 일치하는 discussion을 응답합니다.
    const {name} = req.params;
      let filtered = discussionsData.filter(list=> list.author ===name);
      if(filtered.length !== 0 ){
        return res.status(200).json(filtered[0]);    
      } else {
        return res.status(404).json('Incorrect request')
      }
  }

};

module.exports = {
  discussionsController,
};
