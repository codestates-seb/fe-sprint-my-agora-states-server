const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = [...agoraStatesDiscussions];

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const filterId = discussionsData.find(el => {
      return el.id === Number(id);
    });

    if(filterId){
      return res.status(200).json(filterId);
    } else {
      return res.status(404).send('404 Not Found');
    }
    
  },

  update: (req, res) => {
    const newTweet = {};
    newTweet.id = (discussionsData[0].id*1) + 1;
    Object.assign(newTweet, req.body);
    discussionsData.unshift(newTweet);

    return res.status(201).json(newTweet);
  } 

};

module.exports = {
  discussionsController,
};
