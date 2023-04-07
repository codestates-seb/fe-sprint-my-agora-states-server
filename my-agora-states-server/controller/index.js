const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
const { v4: uuid } = require('uuid');

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData)
  },
// 아이디를 입력하면 입력한 아이디의 discussion을 보여줍니다.
  findById: (req, res) => {
    const { id } = req.params;
    const list = discussionsData.find((el) => el.id === Number(id) )
    if(list) {
      return res.status(200).json(list);
    }
    else{
      return res.status(404).json('Not Found!');
    }
  },
  // 새로운 discussion을 추가합니다
  create: (req,res) => {
    const id = uuid();
    discussionsData.push(req.body);
    console.log(req.body);

    return res.status(200).json(discussionsData);
  },
  // 해당 아이디의 데이터를 수정합니다
  update : (req,res) => {
    const { id } = req.params;
    if(id){
      let filtered = discussionsData.filter((el)=> id === el.id)
      let obj = Objsct.assign(filtered[0],req.body);
      console.log(obj);
      return res.status(200).json(obj);
    }
  }
}
;

module.exports = {
  discussionsController,
};
