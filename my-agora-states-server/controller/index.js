const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;


const discussionsController = {
  findAll: (req, res) => {
    let limit=Number(req.query.limit);
    let presentpage=Number(req.query.offset);

    let renderingdata=[]
    let start=(presentpage-1)*limit+1;
    let end=Math.min(discussionsData.length,start+limit-1);
      for (let i = start; i <= end; i += 1) {
        renderingdata.push(discussionsData[i-1]);
      }
      renderingdata.push(Math.ceil(discussionsData.length/limit));//총 페이지 수
    // TODO: 모든 discussions 목록을 응답합니다.
    //res.status(200).json(renderingdata) 수정 코드
    res.status(200).json(discussionsData)
  },

  findById: (req, res) => {

    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    let filteredData=discussionsData.filter(el=>el.id===Number(req.params.id));
    if(filteredData.length){
      res.status(200).send(...filteredData)
    }
    else{ 
      res.status(404).send(...filteredData)
    }
  },

  postquestion:(req,res)=>{
    console.log(typeof req.body)
    discussionsData.unshift(req.body);
    res.end();
  }

};

module.exports = {
  discussionsController,
};
