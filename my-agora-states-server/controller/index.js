const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
// console.log(discussionsData);

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // res.send('TODO:')
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // console.log("req.params.id");
    // console.log(req.params.id);
    let filtered = discussionsData.filter(el =>
      {return Number(req.params.id) === el.id}
    );
    
    if(filtered.length === 0){
      return res.status(404).json();
    } else {
      return res.status(200).json(filtered[0]);
    }  
    // res.send('TODO:')
  }

};

module.exports = {
  discussionsController,
};
