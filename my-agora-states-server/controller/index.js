const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    let data = discussionsData;
    if (Object.keys(req.query).length) {
      data = discussionsData.filter(el=>{
        const isTrue = [];
        Object.keys(req.query).forEach(key=>{
          isTrue.push(req.query[key] === el[key]);
        })
        return !isTrue.includes(false);
      })
    }
    return res.status(200).json(data);

    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    let data = discussionsData;
    data = data.filter((el) => el.id === (req.params.id)*1)
    if(data.length > 0){
      return res.status(200).json(data[0])
    }
    else return res.status(404).json(null)
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    discussionsData.push(req.body)
    console.log(discussionsData)
    return res.status(201).send('Create a new discussion!')
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
