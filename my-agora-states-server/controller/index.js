const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // const { id, title, url, author, bodyHTML, avatarUrl } = req.query;
    // let filtereddiscussions = discussionsData.slice();

    // if (req.query.id) {
    //   filtereddiscussions = filtereddiscussions.filter((el) => {
    //     return el.id === req.query.id;
    //   });
    // }
    // // if (req.query.createdAt) {
    // //   filtereddiscussions = filtereddiscussions.filter((el) => {
    // //     return el.createdAt === req.query.createdAt;
    // //   });
    // // }
    // // if (req.query.updatedAt) {
    // //   filtereddiscussions = filtereddiscussions.filter((el) => {
    // //     return el.updatedAt === req.query.updatedAt;
    // //   });
    // // }
    // if (req.query.title) {
    //   filtereddiscussions = filtereddiscussions.filter((el) => {
    //     return el.title === req.query.title;
    //   });
    // }
    // if (req.query.url) {
    //   filtereddiscussions = filtereddiscussions.filter((el) => {
    //     return el.url === req.query.url;
    //   });
    // }
    // if (req.query.author) {
    //   filtereddiscussions = filtereddiscussions.filter((el) => {
    //     return el.author === req.query.author;
    //   });
    // }
    // // if (req.query.answer) {
    // //   filtereddiscussions = filtereddiscussions.filter((el) => {
    // //     return el.answer === req.query.answer;
    // //   });
    // // }
    // if (req.query.bodyHTML) {
    //   filtereddiscussions = filtereddiscussions.filter((el) => {
    //     return el.bodyHTML === req.query.bodyHTML;
    //   });
    // }
    // if (req.query.avatarUrl) {
    //   filtereddiscussions = filtereddiscussions.filter((el) => {
    //     return el.avatarUrl === req.query.avatarUrl;
    //   });
    // }


    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // const {id} = req.params;
    // let list = discussionsData.slice();
    // if(req.params.id){
    //   list = list.find((el) => {
    //     return el.id === req.params.id;

    //   });
    //   return res.status(200).json(list);

    // }
    // if(!req.params.id){
    //   return res.status(404).json();
    // }
    //      TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.　✅
    const{id} = req.params;

    const resultData = discussionsData.find(data => 
      data.id === Number(id)
    );

    if (resultData) {  // id가 일치하는 데이터 존재
      return res.status(200).send(resultData);
    } else {  
      return res.status(404).send('not found');
    }
      
    }
  

};

module.exports = {
  discussionsController,
};


// const discussionsController = {
//   findAll: (req, res) => {
//     // TODO: 모든 discussions 목록을 응답합니다.　✅
//     return res.status(200).json(discussionsData);
//   },

//   findById: (req, res) => {
//     // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.　✅
//     const resultData = discussionsData.find((data) => {
//       return req.url === /${data.id};  // 데이터가 담긴 배열이 아닌, 데이터 자체를 반환
//     });

//     if (resultData !== undefined) {  // id가 일치하는 데이터 존재
//       return res.status(200).json(resultData);
//     } else {  // 하나도 존재하지 않음
//       return res.status(404).json();
//     }
//   }
// };