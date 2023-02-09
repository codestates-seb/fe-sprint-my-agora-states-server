const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
// POST /discussion 에서 사용할 uuid입니다.
const { v4: uuid } = require('uuid');

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const id = Number(req.params.id)
    const [ discussion ] = discussionsData.filter(data => data.id === id)
    if(discussion) res.status(200).json(discussion);
    else res.status(404).send('Not Found!');
  },
  
  create: (req, res) => {
    const id = uuid();
    const newDiscussion = {
      id,
      ...req.body
    }
    // discussionsData.push(newDiscussion);
    return res.status(201).json(newDiscussion);
  }
};

module.exports = {
  discussionsController,
};
