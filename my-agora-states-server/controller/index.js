const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

// TODO: 모든 discussions 목록을 응답합니다. // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.   // console.log(discussionsData[0].id);
// TODO: path parameter id를 가진 discussion을 응답합니다.

const discussionsController = {
  findAll: (req, res) => {
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    const {id} = req.params;
    let ID = '45'; 
    
    //id의 값이 그 안에 있으면 202 / 없으면 404  /////??? ID 1은 왜 해당되는거냐 추출은 안되는데 입력은 됨.
    for (i=1; i<discussionsData.length; i++) {
      ID+=`,${discussionsData[i].id}`
    }
   
    if (ID.includes(id)) { //배열 ID는 왜 안되지.
      const list = discussionsData.filter(el=>el.id == id)[0];
      console.log(list)
      return res.status(200).json(list)}
    else return res.status(404).json('Invalid ID');

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