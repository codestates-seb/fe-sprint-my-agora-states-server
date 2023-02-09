const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
   console.log(typeof discussionsData[0].id)
    res.status(404).json(discussionsData);
    },

  findById: (req, res) => {
    const {id}=req.params
    const idx=discussionsData.findIndex((el)=>el.id===parseInt(id));// TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const filteredId=discussionsData.fulter((el)=>el.id===parseInt(id))
    console.loglength!==0

  }
}

module.exports = {
  discussionsController,
};
