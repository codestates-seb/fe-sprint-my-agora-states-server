const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  
  findAll: (req, res) => {
    res.status(200).json(discussionsData)
  },

  // let sameId = discussionsData.find((item) => item.id === Number(req.params.id))
  //   if (sameId) {
  //     return res.status(200).json(sameId);
  //   } else {
  //     return res.status(404).json();
  //   }

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    if(req.params) {
      let sameId = discussionsData.filter ((item) => {
        return Number(req.params.id) === item.id;
      });

    if (sameId.length === 0){
      return res.status(404).end();
    }

    if (sameId) {
      return res.status(200).json(sameId[0]);
    }
    else {
      return res.status(404).end();
    }
  }
},
  


  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
  },
};

module.exports = {
  discussionsController,
};
