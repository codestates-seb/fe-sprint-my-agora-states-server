const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;


const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    let list = discussionsData
    return res.status(200).json(list);
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },  

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    console.log(req.params)
    console.log(typeof req.params.id) // stirng임
    console.log(req.params.id)

    // 만약 id가 존재한다면
    // 상태코드 200으로 응답해라

    // 만약 id가 존재하지 않다면
    // 상태코드 404로 응답해라

    let list = discussionsData;
    if(req.params.id) {
      list = list.filter((el) => el.id === Number(req.params.id));
      if(list.length === 0) {
        return res.status(404).send('error');
      } else {
        return res.status(200).json(...list);
      }
    }

    // let list = discussionsData;
    // let result = [];
    // for(let i = 0; i < list.length; i++) {
    //   // console.log(typeof list[0].id) // number
    //   result.push(list[i].id)
    // }

    // if(req.params){
    //   if(result.includes(Number(req.params.id))) {
    //     let list = discussionsData.filter((el) => {
    //       // console.log(typeof el.id) // number
    //       return el.id === Number(req.params.id);
    //     });
    //     return res.status(200).json(
    //       {
    //         id : list[0].id,
    //         title : list[0].title,
    //         url : list[0].url,
    //         author : list[0].author,
    //         bodyHTML : list[0].bodyHTML,
    //         avatarUrl : list[0].avatarUrl
    //       }
    //     );
    //   } else {
    //     return res.status(404).send('error');
    //   }
    // }

  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    let list = discussionsData;
    list.push(req.body)
    return res.status(201).json({});
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    let data;
    if(req.params) {
      data = discussionsData.filter((el) => Number(req.params.id) === el.id)
      let list = Object.assign(data[0], req.body);
      return res.status(200).json(list);
    }
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.

    // let list = discussionsData;
    // let result = [];
    // for(let i = 0; i < list.length; i++) {
    //   result.push(list[i].id)
    // }

    // if(req.params){
    //   if(result.includes(Number(req.params.id))) {
    //     let list = discussionsData.filter((el) => {
    //       return el.id !== Number(req.params.id);
    //     });
    //     return res.status(200).json(list);
    //   } 
    // }

    // const { phone } = req.query;
    // if(phone !== undefined){
    //   booking = booking.filter(book => book.phone !== phone);
    // }
    // return res.status(200).json(booking);
  },
};

module.exports = {
  discussionsController,
};
