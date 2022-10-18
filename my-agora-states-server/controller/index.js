const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(agoraStatesDiscussions);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params;
    const result = discussionsData.filter((e) => e['id']===Number(id));
    if (result.length===0){
      return res.status(404).send('no data');
    }
    else{
      return res.status(200).send(result[0]);
    }
    // let result = discussionsData.filter(e => {
    //   return e['id']===id;
    // })
    // if (result.length===0){
    //   return res.status(404).send(result);
    // }
    // else{
    //   return res.status(200).send(result);
    // }
    //return res.send(result); //send

    // const found={};
    // for (let el of discussionsData){
    //   if (el["id"]===id){
    //     found["id"]=id;
    //     found["title"]=el.title;
    //     found["url"]=el.url;
    //     found["author"]=el.author;
    //     found["answer"]=el.answer;
    //     found["bodyHTML"]=el.bodyHTML;
    //     found["avatarUrl"]=el.avatarUrl;
    //     return res.status(200).send(found);
    //   }
    // }
  }

};

module.exports = {
  discussionsController,
};
