const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // get /:id
    // 내가 입력하는 id 값은 문자열  더미데이터에 있는 id 값은 숫자
    const { id } = req.params
  
    if(req.params !== undefined){
    const filterdis = discussionsData.find(el=>el.id ===Number(id))
        if(filterdis){
          return res.status(200).send(filterdis)
        }else{
          return res.status(404).send("Not Found!")
        }
    }
  },
// put 요청으로 질문 수정 (이름이나,, 타이틀이나)
// put /:id
  update: (req,res)=>{
    const { id } = req.params
    const bodyData = req.body;

    if(req.params !== undefined){
let reuslt = [];
      discussionsData.filter((el,i)=>{
      if(el.id === Number(id)){

        if(bodyData.title !== undefined){
           el.title = bodyData.title 
        }
        if(bodyData.author !== undefined){
            el.author = bodyData.author
        }
        discussionsData.splice(i,1,el)
        return res.status(200).send(el)
      }
    })
    }


   
  }

};

module.exports = {
  discussionsController,
};
