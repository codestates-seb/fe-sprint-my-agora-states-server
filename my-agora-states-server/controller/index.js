const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;
const express = require('express');

const discussionsController = {
  findAll: (req, res) => {
    let data = discussionsData;
    let limit = req.query.limit ? Number(req.query.limit) : 10;
    let page = req.query.page ? Number(req.query.page) : 0;

    if (req.query.limit) {
      if (!(req.query.limit / 1)) {
        return res.status(400).send();
      }
      if (req.query.limit) {
        data = discussionsData.slice(page * limit, page * limit + limit);
      }
      if (Number(req.query.limit) > discussionsData.length) {
        data = [];
      }
    }
    return res.status(200).json(data);
  },

  findById: (req, res) => {
    const { id } = req.params;
    const data = discussionsData.filter(
      discussion => discussion.id === Number(id)
    );
    return data.length ? res.status(200).json(...data) : res.status(404).send();
  },

  // createOne: (req, res) => {
  //   const newdiscussion = req.body;
  //   discussionsData.push(newdiscussion);
  //   return res.status(201).json({});
  // },

  // updateById: (req, res) => {
  //   const { id } = req.params;
  //   const bodyData = req.body;
  //   const beUpdatedIdx = discussionsData.findIndex(
  //     discussion => discussion.id === Number(id)
  //   );
  //   const updatedDiscussion = { ...discussionsData[beUpdatedIdx], ...bodyData };
  //   discussionsData.splice(beUpdatedIdx, 1, updatedDiscussion);
  //   return res.status(200).json(updatedDiscussion);
  // },

  // deleteById: (req, res) => {
  //   const { id } = req.params;
  //   discussionsData = discussionsData.filter(
  //     discussion => discussion.id !== Number(id)
  //   );
  //   return res.status(200).json(discussionsData);
  // },
};

module.exports = {
  discussionsController,
};
