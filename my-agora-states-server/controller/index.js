const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // const {author} = req.query;
    // if(author){
    //   res.json(discussionsData.filter((item) => item.author === author))
    // }else{
    //   res.json(discussionsData);
    // }
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {

    const filterData = discussionsData.filter((discussion) => discussion.id === Number(req.params.id))
    if(filterData.length === 0){
      res.status(404).send('Not Found');
    }
    res.send(...filterData);
  }

};

module.exports = {
  discussionsController,
};
