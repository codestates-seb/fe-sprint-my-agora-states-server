const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  // GET /discussions
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    //GET /discussions/:id
    const { id } = req.params; 
    const findById = discussionsData.find(discussion => discussion.id === Number(id));
    if(findById) {
      return res.status(200).json(findById)
    } else {
      return res.status(404).send('Not found');
    }
  }
  
 //! 실패한 방법
    // if(req.params !== undefined){
    //   console.log(req.params);
    //   const filteredId = discussionsData.filter((discussions)=>{
    //     return discussions.id === req.params.id
    //   });
    //   console.log(filteredId);
    //   return res.status(200).json(filteredId)
    // }
    // return res.status(404).json(discussionsData)
};

module.exports = {
  discussionsController,
};
