const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData)
  },
//---------------------------findAll---------------------------------
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
  //---------------------------findById---------------------------------
  create: (req, res) => {
    const discussionData_id = discussionData.length;
    req.body.id = discussionData_id
  discussionsData = [req.body,...discussionsData]
  return res.json(discussionsData)
  }
  //---------------------------create---------------------------------
};





module.exports = {
  discussionsController,
};
