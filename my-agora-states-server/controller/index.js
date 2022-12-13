const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.

    if(Object.keys(req.query).length === 0) {
      return res.status(200).json(discussionsData);
    }
  },

  findById: (req, res) => {
    const {id} = req.params;
    
    let filterData = discussionsData.filter(discussion  => {
      return discussion.id === Number(id) 
    })

    if(filterData.length === 0 ) {
      return res.status(404).send('Not Found!');
    }
    return res.status(200).json(filterData[0])
  }

};

module.exports = {
  discussionsController,
};
