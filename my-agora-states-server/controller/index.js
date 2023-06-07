const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    //const { author } = req.query;
    //if (author) {
    //  res.json(discussionsData.filter({item} => item.author === author))
    //} else
    res.send(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const{ id } = req.params;
    const filtered = discussionsData.filter(discussion => discussion.id === Number(id));
    if (filtered.length > 0 ) {
      return res.send(filtered[0])
    } else {
      return res.status(404).send('Bad Request'); 
    }  
  }
};

module.exports = {
  discussionsController,
};
