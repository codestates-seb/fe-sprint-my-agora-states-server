const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    let data = discussionsData;
    // console.log(req.query)
    const page = Number(req.query.page)
    const limit = Number(req.query.limit)

    //limit 요청 값이 있을 때
    if(req.query.limit){
      data = data.slice(0, limit)
      
      //잘못된 limit 요청일 때 상태 코드 400
      if(!(req.query.limit / 1)){
        return res.status(400).send('잘못된 요청 값')
      }
      //limit 요청이 범위를 벗어났을 때 빈배열
      if(limit > data.length){
        return res.status(200).json([]);
      }
    }
    //limit 요청 값 없을 때 10개만
    else{
      data = data.slice(0, 10)
    }
    return res.status(200).json(data)
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    console.log(req.params)
    let data = discussionsData;
    if(req.params){
      data = data.filter((el) => {
        return Number(req.params.id) === el.id;
      })
    }
    let body = Object.keys(req.body);
    for(let i = 0; i < body.length; i++){
      //클라이언트가 요청한 body의 키값을 data[0][key]에 할당
      data[0][body[i]] = req.body[body[i]]
    }
    if(data.length > 0){
      return res.status(200).json(data[0]);
    }
    return res.status(404).send('not found')
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    let data = discussionsData;
    data.unshift(req.body)
    return res.status(201).json(data);
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
   
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
    let data = discussionsData;
    data = data.filter(el=>Number(req.params.id) !== el.id);
    return res.status(200).json(data);
  },
};

module.exports = {
  discussionsController,
};
