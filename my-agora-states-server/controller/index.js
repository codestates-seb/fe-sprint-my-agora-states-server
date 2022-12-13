const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
const express = require('express')
const app = express();
app.use(express.json());

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    const {id}=req.params;
    filteredDiscussionsData=discussionsData.filter((discussion)=>{
      return discussion.id===Number(id);
    })
    if(filteredDiscussionsData.length>0)
    return res.status(200).json(filteredDiscussionsData[0]);
    else return res.status(404).send();
  }

};

module.exports = {
  discussionsController,
};
