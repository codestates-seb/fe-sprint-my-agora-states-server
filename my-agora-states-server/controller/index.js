const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const dataOfTheId = discussionsData.find(data => data.id === Number(id));
    // 왜 filter는 안되었는가...?
    if (dataOfTheId) {
      return res.status(200).json(dataOfTheId)
    } else {
      return res.status(404).json('404 Not Found');
    }
  }
  // return 안 붙여주면 Cannot set headers after they are sent to the client 에러 발생 8ㅅ8
};


module.exports = {
  discussionsController,
};


// my-agora-states-server/controller/index.js
// discussionsController.findAll
// discussionsController.findById
