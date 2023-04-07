const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
const express = require('express');


const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    //return res.status(200).json('TODO:')
    return res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params;
    if(req.params !== undefined){
    const filteredId = discussionsData.filter(el => String(el.id) === id)
    if(filteredId.length !== 0){
      return res.status(200).json(filteredId[0])
    }else{
      return res.status(404).json({error: "입력된 id없음. id를 다시 입력하세요."})}
  }
}
};

module.exports = {
  discussionsController,
};
