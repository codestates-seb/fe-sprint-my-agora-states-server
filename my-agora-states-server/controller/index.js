const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

// fetch("http://localhost:4000/discussions").then((res)=>res.json()).then((data)=>{
//   agoraStatesDiscussions = data;
//   const ul = document.querySelector("ul.discussions__container");
//   render(ul);
// })

// let serverDiscussions = [];
// fetch('http://localhost:4000/discussions')
//   .then(res => res.json())
//   .then(json=>{
//     serverDiscussions = json;
//     const ul = document.querySelector('ul.discussions__container');
//     render(ul);
//   })

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    if(Object.keys(req.query).length === 0){
      return res.status(200).send(discussionsData);
    }
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;

    let filteredData = discussionsData.filter(discussion => {
      return discussion.id === Number(id);
    })

    if(filteredData.length === 0){
      return res.status(404).json(`${id} is not found`);
    }else{
      return res.status(200).json(filteredData[0])
    }
    // const data = discussionsData.find((el)=> el.id === Number(id));
    // if(data){
    //   res.status(200).send(data);
    // }else{
    //   res.status(404).send("Not Found");
    // }
    // res.send('TODO:')
  }

};

// const render = (element)=>{
//   for(let i = 0; i <agoraStatesDiscussions.length;i++){
//     element.append(convertToDiscussion(agoraStatesDiscussions[i]))
//   }
// }

module.exports = {
  discussionsController,
};
