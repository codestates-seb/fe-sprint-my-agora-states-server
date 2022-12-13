const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
    // res.send('TODO:')
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params;
    const { title, url, author, bodyHTML, avatarUrl } = req.query;
    // if(id !== undefined){
    //   const discussionlist = discussionsData.filter(discussion => id === discussion.id)
    //   return res.status(200).json(discussionlist);
    // }
    console.log(typeof id)
    const discussionlist = discussionsData.filter(discussion => {
      return Number(id) === discussion.id})
    if(discussionlist.length === 0){
      return res.status(404).json('Not Found!');
    }
    else{
      return res.status(200).json(...discussionlist);
    }
      
    
    
    // res.send('TODO:')
  }

};

module.exports = {
  discussionsController,
};
 