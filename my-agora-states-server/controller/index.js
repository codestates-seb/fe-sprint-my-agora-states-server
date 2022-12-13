const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussionsr 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.

    const {id} = req.params;
    let filteredById = discussionsData.find((d)=> d.id === Number(id));
    if(filteredById){
      return res.status(200).json(filteredById);
    }else 
      return res.status(404).send('Not Found');

  }
};

module.exports = {
  discussionsController,
};
