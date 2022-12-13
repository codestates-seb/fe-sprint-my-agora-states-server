const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.send(discussionsData)
    
    // findAll: (req, res) => {  
    //   // TODO: 모든 discussions 목록을 응답합니다.
    //   return res.status(200).json(discussionsData); 이거 json(discussionData는 뭘 의미?)
    //   //throw "";
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // const {uuid} = req.params;
    // let filter = data.filter((el) => el.uuid ===req.params.id);
  //   const params = req.params.id;
  //   const data = discussionsData.find(discussion => discussion.id === Number(id));
  //   if (data.length !== 0) {
  //     return res.status(200).json(data[0]);
  //   } else {
  //     return res.status(404).end();
  //   }
  // },
  
  const { id } = req.params;
  const found = discussionsData.find((d) => d.id === Number(id));
  if (found) {
    return res.status(200).json(found);
    console.log(found)
  } else {
    return res.status(404).send("Not found");
  }
},
  //   res.send()  // todo
  // }

};

module.exports = {
  discussionsController,
};
