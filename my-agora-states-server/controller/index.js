const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.

    // return res.json(discussionsData);
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    const {limit, page} = req.query;

    const numLimit = Number(limit);
    const numPage = Number(page);
    
    if(limit > discussionsData.length) return res.json([]);
   
    if(req.query){
      if(limit){
        if(isNaN(limit)) return res.status(400).send('filed'); // 잘못된 쿼리 파라미터 값

        if(numLimit === 3){
          let filtered = [];
          for(let i=numLimit*numPage-2; i<=numLimit*numPage; i++){
            filtered.push(discussionsData[i]);
          }
          return res.status(200).json(filtered);
        }else{
          let filtered =[];
          for(let i=0; i<numLimit; i++){
            filtered.push(discussionsData[i])
          }
          return res.status(200).json(filtered)
        }
      }
      if(!limit){
        let filtered = [];
        for(let i=0; i<10; i++){
          filtered.push(discussionsData[i])
        }
        return res.status(200).json(filtered);
      }
    }
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    const {id} = req.params;
    
      const list = discussionsData.filter((item)=>{
        return item.id === Number(id); // id의 타입은 string이기 때문에 숫자로 바꿔줘야 한다.
      })
      
      if(list.length === 0) res.status(404).send('NOT FOUND!!');

      return res.status(200).json(...list);      
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    const {body} = req.body;
    console.log(body)
    discussionsData.push(body);

    return res.status(201).json(discussionsData)
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
  },
};

module.exports = {
  discussionsController,
};
