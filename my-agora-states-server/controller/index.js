const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).send(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const {id} = req.params // url 자체에 string으로 들어옴.
    // console.log(req.params) // { id: '2'}
    // console.log(id) // 2
    // console.log(typeof id)로 찍는게 더 정확!

    // id, title, url, author, bodyHTML, avatarUrl

    const isId = discussionsData.find((el) => {
     return el.id === Number(id)
    })  // isId === {id:2}

    // console.log(isId) // undefined....  // Number(id)로 해결!

    // const filtered = discussionsData.filter((el) => {
    //   return el.id === Number(id)}) // 배열 안에 해당 객체가 들어간 형태
    //   // console.log(filtered)
      
    // const { title, url, author, bodyHTML, avatarUrl } = filtered // 무슨 일이 일어나지???
    // const title = filtered[0].title
    // const url = filtered[0].url
    // const author= filtered[0].author
    // const bodyHTML= filtered[0].bodyHTML
    // const avatarUrl = filtered[0].avatarUrl


  // .json() json -> object // 파싱
  // .stringify() object -> json // json화

    // const data =  { id, title: title, url: url, author: author, bodyHTML: bodyHTML, avatarUrl: avatarUrl }

      // console.log(data)
    if (isId) {
      res.status(200).json(isId)
    } else  {
      res.status(404).send()
    }
  
  //  .json === .stringfy + .send 
  }

};

module.exports = {
  discussionsController,
};
