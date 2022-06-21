const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.

    let newDiscussions = discussionsData;

    return res.status(200).send(newDiscussions);
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    let newDiscussions = discussionsData;
    let discussion;
    let isConstain = false;

    for(let i=0; i<newDiscussions.length; i++){
      if(newDiscussions[i].id === Number(req.params.id)) {
        isConstain = true;
        discussion = newDiscussions[i]; 
        break;
      }
      console.log("param.id => ", req.params.id , typeof(req.params.id));
      console.log("discussion.id => ",newDiscussions[i].id, typeof(newDiscussions[i].id))
    }
    if(isConstain) return res.status(200).send(discussion);
    else return res.status(404).send("없다..");


    return res.send(newDiscussions);
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
