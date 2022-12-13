const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).send(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    // console.log(typeof id) // string 
    
    const filteredid = discussionsData.filter((data) => {
      // console.log(typeof data.id) // number
      // console.log(data.id === Number(id)) // number number  > true
      return data.id === Number(id)})
      // if (data.id !== Number(id)) { return res.status(404).send(`Invalid id >> ${id}`)}
      // console.log(filteredid)
      if (filteredid.length === 0) {
        return res.status(404).send(`Invalid id >> ${id}`)
      } else {
        return res.status(200).send(filteredid[0])}
      }

          
      

    

};

module.exports = {
  discussionsController,
};
