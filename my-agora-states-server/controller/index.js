const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
const { v4: uuid } = require('uuid');

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.json(discussionsData)
  },

  findById: (req, res) => {
    const { id } = req.params;
    
    const target = discussionsData.find((el)=>{
      console.log(typeof id);
      // if(typeof id === "string"){
      //   return el.id === id
      // }else{
      // }
      return el.id === Number(id)
    })

    if(target === undefined) return res.status(404).json(discussionsData)

    return res.json(target)
  },

  create: (req, res) => {
    let data = discussionsData;
    console.log(req.body);

    const newObj = {
      id : req.body.id,
      createdAt: req.body.createdAt,
      title: req.body.title,
      answer: null,
      url: req.body.url,
      bodyHTML: req.body.bodyHTML,
      avatarUrl: req.body.avatarUrl,
      author: req.body.author,
      updatedAt: req.body.updatedAt
    }
    data.push(newObj)

    return res.status(201).json(newObj)
  },

  deleteById: (req, res) => {
    const id = req.params;
    // TODO:

    const deleteIdx = discussionsData.indexOf(el => {
      return el.id === id
    })

    discussionsData.splice(deleteIdx,1)

    return res.status(201).json("delete success!");
  }
};

module.exports = {
  discussionsController,
};
