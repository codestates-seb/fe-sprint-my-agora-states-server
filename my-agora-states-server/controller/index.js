const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData)
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    let id = req.param('id');
    var discussionData = discussionsData.find(x => x.id == id);//filter 시도해보고 선민님께 보고. ();
    if(discussionData == undefined)
    {
      console.log("is Undefined");
      throw res.status(404);
    }
    else
    {
      return res.status(200).json(discussionData);
    }    
  },
  
  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    return res.status(200).json(discussionsData)
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    return res.status(200).json(discussionsData)
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
    return res.status(200).json(discussionsData)
  },
};

module.exports = {
  discussionsController,
};
