const { agoraStatesDiscussions } = require("../repository/discussions");
let discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id}=req.params;
    let list=discussionsData;
    if (req.params) {
      
    
    list = list.filter((items)=>{
     return items.id===Number(id);
    })
    if(list.length===0){
      return res.status(404).send('존재하지 않는 id입니다');
     }
    }
    

    return res.status(200).json(...list);
  },


  create : (req, res) => {
    const {
        title,
        author,
        bodyHTML,
    } = req.body;
    const id =  
        Math.floor(Math.random() * 10000) + 10000
    
        .toString()
        .substring(1);
    const date = new Date();
    const createdAt = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() +
            "-" + date.getDay() + "T" + date.getHours() + ":" + date.getMinutes() + "z";
    // TODO:

    if (title, author , bodyHTML) {
        let newDiscussions = {
          id:Number(id),
          createdAt,
          title,
          url: "https://github.com/codestates-seb/agora-states-fe/discussions ",
          author,
          answer: null,
          bodyHTML,
          avatarUrl: "https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-%" +
                  "EB%82%A8%EC%84%B1-%EC%95%84%EB%B0%94%ED%83%80-%ED%94%84%EB%A1%9C%ED%95%84-%EC%" +
                  "82%AC%EC%A7%84-%EA%B8%B0%EB%B3%B8-%EC%82%AC%EC%9A%A9%EC%9E%90-%EC%95%84%EB%B0%" +
                  "94%ED%83%80-%EA%B2%8C%EC%8A%A4%ED%8A%B8-%EC%95%84%EB%B0%94%ED%83%80-%EB%8B%A8%" +
                  "EC%88%9C%ED%9E%88-%EC%9D%B8%EA%B0%84%EC%9D%98-%EB%A8%B8%EB%A6%AC-%EB%B2%A1%ED%" +
                  "84%B0-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-%EB%A0%88%EC%9D%B4-%EC%85%98-%ED%9D" +
                  "%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90.jpg"
           
        }
        discussionsData.unshift(newDiscussions);
    }
    return res.status(201).send(discussionsData);

}
,
deleteDiscussions:(req, res) => {
  const { id } = req.params;
    discussionsData = discussionsData.filter((items) => items.id!== Number(id));
    return res.status(200 ).send(discussionsData);
}

  
};

module.exports = {
  discussionsController,
};
