const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
const { v4: uuid } = require('uuid');

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    //res.send('TODO:')
    res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    //res.send('TODO:')
    const {id} = req.params;
    const data = discussionsData.find(discussion => discussion.id === Number(id));
    if(data){
      return res.status(200).json(data);
    }else{
      return res.status(404).send('Not found');
    }
  },


  create : (req, res) => {
    const id = uuid();
    const { title, author, bodyHTML } = req.body;
    const newDiscussion = {
      id,
      createdAt:new Date().toISOString(),
      title,
      author,
      bodyHTML
    }
    discussionsData.push(newDiscussion);
    return res.status(201).json(newDiscussion);
  },

  deleteData : (req,res) => {
    const {id} = req.params;
    const data = discussionsData.find(discussion => discussion.id === Number(id));
    const index = discussionsData.indexOf(data);
    if(data){
      discussionsData.splice(index, 1);
      return res.status(200).send("deleted");
    }else{
      return res.status(404).send('The course with the given ID was not found');
    }
  }

};

module.exports = {
  discussionsController,
};
