const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params;

    let result = discussionsData.filter((data) => {
      return data.id === Number(id);
    })

    if(result.length !== 0) {
      res.status(200).json(result[0]);
      // res.status(200).json(result);
    }
    else {
      res.status(404).send('Not Found');
    }

    // let result = discussionsData.find((data) => {
    //   return data.id === Number(id);
    // })

    // if(result) {
    //   res.status(200).json(result);
    //   // res.status(200).json(result);
    // }
    // else {
    //   res.status(404).send('Not Found');
    // }
  }
};

module.exports = {
  discussionsController,
};
