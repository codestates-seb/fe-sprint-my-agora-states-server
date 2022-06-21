const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;



const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.json(discussionsData)
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    // let diss = discussionsData.filter(el => {
    //   return req.params.id === el.id
    // })
    // console.log(diss) // 왜 빈배열로 나오지?
    // return res.json(diss)
    const {id} = req.params; 
    let data;
    // console.log(typeof discussionsData[0].id) // number 타입
    // console.log(typeof id) // string 타입
    for(let i=0; i<discussionsData.length; i++){
      if(discussionsData[i].id === Number(id)){
        data = discussionsData[i]
        return res.status(200).json(data)
      }
    }
    if(data === undefined){
      return res.status(404).send('NOT FOUND!')
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
