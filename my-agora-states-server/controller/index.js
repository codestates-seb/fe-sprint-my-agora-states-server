const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // res.send('TODO:')
    return res.status(200).json(agoraStatesDiscussions);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // res.send('TODO:')
    const {id}=req.params;
    if(id){
      const filteredDiscussionByID=agoraStatesDiscussions.filter(
        (discussion)=>{
          return discussion.id===Number(id);
        }
      );
      // const bodyData=filteredDiscussionByID[0];
      // const body={
      //   id:bodyData.id,
      //   title:bodyData.title,
      //   url:bodyData.url,
      //   autor:bodyData.author,
      //   bodyHTML:bodyData.bodyHTML,
      //   avatarUrl:bodyData.avatarUrl
      // };
      if(filteredDiscussionByID.length===0){
        return res.status(404).json('No discussion');
      }
      return res.status(200).json(filteredDiscussionByID[0]);
    }
    return res.json(agoraStatesDiscussions);
  }

};

module.exports = {
  discussionsController,
};
