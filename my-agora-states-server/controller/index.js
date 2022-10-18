const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    const { id, createdAt, updatedAt, title, url, author, answer, bodyHTML, avatarUrl } = req.query;
    
    const dataAll = agoraStatesDiscussions.filter(datas => {
      if(id && datas.id !== id) return false;
      if(createdAt && datas.createdAt !== createdAt) return false;
      if(updatedAt && datas.updatedAt !== updatedAt) return false;
      if(title && datas.title !== title) return false;
      if(url && datas.url !== url) return false;
      if(author && datas.author !== author) return false;
      if(answer && datas.answer !== answer) return false;
      if(bodyHTML && datas.bodyHTML !== bodyHTML) return false;
      if(avatarUrl && datas.avatarUrl !== avatarUrl) return false;

      // return true;
    })
    return res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;

    const filterbyid = discussionsData.filter(data => {
      return data.id === Number(id);
    }) 

    if(filterbyid.length !== 0) return res.staus(200).send(filterbyid[0]);
    else{ return res.status(404).send('Not Found!'); }    
  }


};

module.exports = {
  discussionsController,
};
