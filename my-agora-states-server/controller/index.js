const { agoraStatesDiscussions } = require("../repository/discussions");
let discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // res.status(200).send(JSON.stringify(discussionsData));
    res.status(200).json(discussionsData);
  },

  findById: (req, res,next) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    
    const reqID = Number(req.params.id);

    const idfilterData = discussionsData.filter((discussionData)=>{
      if(discussionData.id === reqID){
        return true;
      }
    })

    if(idfilterData.length === 0){
      return res.status(404).json("데이터 없음.");
    }
    else{
      res.status(200).json(idfilterData[0]);
    }
  },

  addData: (req,res) =>{
    console.log(req.body);
    const newTweet= {
    id: Math.random()*10000,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    title: req.body.title,
    author: req.body.author,
    answer: null,
    avatarUrl:
      "https://avatars.githubusercontent.com/u/97888923?s=64&u=12b18768cdeebcf358b70051283a3ef57be6a20f&v=4",
  }
  discussionsData = [{...newTweet}, ...discussionsData]
  res.status(200).json(newTweet);
  },

  pageCount: (req, res) =>{
    let count = Math.floor(discussionsData.length / 10);
    discussionsData % 10 === 0 ? count : count++;

    res.status(200).json(count);
  },

  renderpage: (req,res) => {

    const {pagenum} = req.query;
    arr=[];

    for(let i = pagenum * 10 - 10 ; i< pagenum * 10;i++){
      arr.push(discussionsData[i])
      if(i+1 === discussionsData.length) break;
    }

    res.status(200).json(arr);
  }

};

module.exports = {
  discussionsController,
};
