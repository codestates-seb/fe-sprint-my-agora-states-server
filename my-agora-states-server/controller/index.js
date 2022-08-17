const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData)
  },
  
  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    // const {id, title, url, author, bodyHTML, avatarUrl} = req.body;
    if(id !== undefined) {
      const filteredData = discussionsData.filter(discuss => discuss.id === Number(id))
      console.log(filteredData.length)
      // if(filteredData.length === 1) {
      //   return res.status(200).json(...filteredData)
      // } else if(filteredData.length === 0) {
      //   return res.status(404).json(`id: ${id} is not exist`)
      // }
      filteredData.length === 1 ? res.status(200).json(...filteredData) : res.status(404).json(`id: ${id} is not exist`);
    }
  }

};

module.exports = {
  discussionsController,
};
