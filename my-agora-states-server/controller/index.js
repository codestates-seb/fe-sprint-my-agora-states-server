const { agoraStatesDiscussions } = require("../repository/discussions");   //  = [{...}]
const discussionsData = agoraStatesDiscussions;   // {[{....}]}




const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    
    const { id } = req.params;

    let data = discussionsData.find((el) => {
      return el.id === Number(id)
    })

    // let data = discussionsData.filter((el) =>{
    //   return req.params.id === el.id
    // })                                                      // data = 

    if (data) {
      return res.status(200).json(data)
    } else  {                                          // 안넘어감
        return res.status(404).json('xxx');
      }

  }

};

module.exports = {
  discussionsController,
};
