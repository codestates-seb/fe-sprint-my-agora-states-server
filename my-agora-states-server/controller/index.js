const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    if (Object.keys(req.query).length === 0) { 
      return res.status(200).json(discussionsData);
    }
  },

  findById: (req, res) => {
    
    const { id } = req.params;
    let filteredData = discussionsData.filter(discussion => {
      return discussion.id === Number(id);
    })
    if (filteredData.length === 0) { 
      return res.status(404).json('${id} is not found');
    } else { 
      return res.status(200).json(filteredData[0]);
      
    }
  }
};

module.exports = {
  discussionsController,
};
