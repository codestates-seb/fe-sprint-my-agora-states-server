const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // console.log(req.body);
    const { id } = req.params;
    // console.log(id);
    let isInclude = false;

    discussionsData.forEach(el => {
      if (el.id === parseInt(id)){

        isInclude = true;
        res.status(200).send(el)
        // console.log(resBody);
      }
    })

    if (isInclude === false){
      res.status(404).send(body)
    }
  },

  createNew : (req, res) => {
    
  }

};

module.exports = {
  discussionsController,
};
