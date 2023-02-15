const { agoraStatesDiscussions } = require("../repository/discussions");
let discussionsData = agoraStatesDiscussions;

const discussionsController = {
  //---------------------------findAll---------------------------------
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData)
  },
  //---------------------------findById---------------------------------
  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params
    const filteredDiscussions = discussionsData.filter(userid => { //요청으로 들어온 id와 일치하는 데이터를 필터링해서 배열안에 담는다
      return userid.id === Number(id);
    });

    if(filteredDiscussions.length === 0){ // id가 일치하는게 없다면 배열은 빈배별이다.
      return res.status(404).json({
        message: '니 잘못이야 404잖아',
        stacktrace: err.toString()
      }) 
  }
    else if(filteredDiscussions.length >= 0){ // id가 일치하는게 있다면 필터링 된 데이터가 객체형태로 배열안에 있을 것.
      return res.json(filteredDiscussions[0])
    }
  },
 //---------------------------create---------------------------------
  create: (req, res) => {   
  console.log(req.body)
  discussionsData.unshift(req.body)
  //데이터를 다 돌려주지 않아도 된다. 기존 데이터에 추가만해준다.
  return res.json(discussionsData[0])
  },
  //---------------------------delete---------------------------------
  deletebyID: (req, res) => {    
    if(req.body){
      discussionsData = discussionsData.filter((item) => {
        return req.body !== item.id })     
      }
    
    console.log(req.body)
    return res.json(discussionsData)
    },
  //---------------------------update--------------------------------
  updatebyDiscussion: (req, res) => {    
    const bodyData = req.body
    const {id} = req.params
    console.log(req.params) // 수정 할 게시물의 id가 들어옴
    console.log(req.body) // 수정 게시물의 수정내용이 들어옴
    let indexNum;
      for(let i=0; i<discussionsData.length; i++) {
        if(discussionsData[i].id === Number(id)) {
          indexNum =i;
        }
      }
      discussionsData[indexNum] = Object.assign(discussionsData[indexNum], bodyData);
      return res.json(discussionsData)
   }
};

module.exports = {
  discussionsController,
};
