const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions; //그 목록들을 discussionData라 한다.

//지금 여기가 flightController.js같은 역할하는거다

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.

    return res.send(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    let filtered = discussionsData.filter((el)=> el.id === Number(id));

    if(filtered.length === 0){
      return res.status(404).json("Not found");
    }
    else {
      return res.status(200).json(filtered[0]);
    }

  }

};

module.exports = {
  discussionsController,
};
