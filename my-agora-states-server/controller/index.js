const { identity } = require("underscore");
const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // const {id} = req.params;
    // let filDisData = discussionsData.filter(discussion => {
    //   return discussion.id === Number(id);
    // })
    // if(filDisData.length === 0){
    //   return res.status(404).json(`${id} is not found` )
    // }else{
    //   return res.status(200).json(filDisData[0])
    // }
   
    const { id } = req.params;
    // 같은 id 값 걸러준 친구
    let filDisData = discussionsData.filter((item)=>{
      return item.id === Number(id) ;
    })
    if(filDisData.length === 0){
      return res.status(404).json(` ${id} is not found`)
    }else{
      return res.status(200).json(filDisData[0])
    }
    // res.send(discussionsData.filter(()=>{
    //   let pass = true
    //   if (pass = pass && (discussionsData === discussionsData.id)){
    //     return pass 
    //     console.log(pass)
        
    //   }
    //   if (pass = pass && (discussionsData === undefined)){
    //     return res.status(404).json('에러')
    //   }
    // }))
  }

};

module.exports = {
  discussionsController,
};
