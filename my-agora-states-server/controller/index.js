const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    return res.status(200).json(discussionsData)
    // TODO: 모든 discussions 목록을 응답합니다.
    // res.send('TODO:')
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params
    console.log(req.params)
    // if(id.length === 0)
    //   return res.status(404).send('NOT FOUND')
      const filterId = discussionsData.filter((obj) => {
        // console.log(obj.id)
        // console.log(id)
        return obj.id === Number(id)
      })
      console.log(filterId) 
      if(filterId.length !== 0)
        return res.status(200).json(filterId[0])//객체로 들어가야함 =>[0] 입력해줘야함
      else
        return res.status(404).json('nope')
    // res.send('TODO:')
  }

};
module.exports = {
  discussionsController,
};
