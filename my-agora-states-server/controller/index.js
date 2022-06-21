const express = require('express');
const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    let data = discussionsData
    // let page = req.query.page ? Number(req.query.page) : 0
    // let limit = req.query.limit ? Number(req.query.limit) : 10 

    // if(req.query.limit){
    //   if(!(req.query.limit / 1)) return res.status(400).send()
    //   if(req.query.limit) data = discussionsData.slice((page * limit), (page * limit) + limit)
    //   if(Number(req.query.limit) > discussionsData.length) data = []
    // } 
    // else data = discussionsData.slice((page * 10), (page * 10) + 10)

    return res.status(200).json(data)
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    const data = discussionsData.filter((e) => {
      return Number(req.params.id) === e.id
    })
    
    return data.length ? res.status(200).json(...data) : res.status(404).send()
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
  },
};

module.exports = {
  discussionsController,
};
