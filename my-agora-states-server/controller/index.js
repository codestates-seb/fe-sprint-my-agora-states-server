const e = require("express");
const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    uuid= req.params.id;
    // const keys = object.keys(req.body);
    
  
    const filterid = [];
 
    discussionsData.filter((el)=>{
      if(String(el.id) === uuid){
        // const result = {
        //   id : el.id,
        //   title: el.title,
        //   url : el.url, 
        //   author: el.author,
        //   bodyHTML: el.bodyHTML, 
        //   avatarUrl: el.avatarUrl
        // }
        filterid.push(el);
    }
  
    })

    if(filterid[0])
    res.status(200).send(filterid[0])

    
  res.status(404).send('not found')
  }

};
// npx nodemon my-agora-states-server/app.js
module.exports = {
  discussionsController,
};
