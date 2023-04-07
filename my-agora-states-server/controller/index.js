const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;


const discussionsController = {
  // [GET] /discussions?query={query} 요청을 수행
  findAll: (req, res) => {
    if (req.query.query) {
      const filteredDiscussions = discussionsData.filter((discussion) => {
        return discussion.title.toUpperCase().includes(req.query.query.toUpperCase())
      });
      return res.status(200).json(filteredDiscussions) 
    }
    res.status(200).send(discussionsData)    // query 없으면 전체 데이터
  },

  // [GET] /discussions/:id 요청을 수행 (요청으로 들어온 id와 일치하는 discussion을 응답)
  findById: (req, res) => {
    const id = req.params.id;
    const idNumber = Number(id)
    if (id) {
      const filteredDiscussionsById = discussionsData.filter((discussion) => discussion.id === idNumber )
      if (filteredDiscussionsById.length === 0) {
        return res.status(404).json(`there is no posting by Id(${id}) you were searching for`)
      }
      return res.status(200).json(filteredDiscussionsById[0])
    } 
  },

  create: (req, res) => {
    
  },

  update: (req, res) => {
    
  }

};

module.exports = {
  discussionsController,
};
