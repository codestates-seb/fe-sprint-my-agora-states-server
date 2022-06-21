const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // 리턴해서 응답을 주는 코드. => 모든 디스커션의 정보를 넣어줌.
    return res.status(200).json(discussionsData)
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.-c
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    // let list = []
    // if(req.params){
    //   list = discussionsData.filter((item)=>{
    //   return Number(item.id) === Number(req.params);
    //   });
    //   return res.status(200).json(list);
    // }else{return res.status(404).json(list)}

    const { id } = req.params;

    const data = discussionsData.filter(
      (item) => Number(item.id) === Number(id)
    );
    if (data.length === 0) {
      return res.status(404).send("Err");
    }
    return res.status(200).json(data[0]);

    // const id = Number(req.params.id);
    // let index = 0;
    // for(let data of discussionsData) {
    //   if (data.id === id) {
    //     index = id
    //     break;
    //   };
    // }
    // if (index === 0) return res.status(404).end();
    // const [ temp ] = discussionsData.filter((item) => item.id === id);
    // return res.status(200).json(temp);
  // 아마도. temp가 구조분해할당 일것임. 
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    return res.status(200).json(discussionsData)

  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    return res.status(200).json(discussionsData)

  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
    return res.status(200).json(discussionsData)

  },
};

module.exports = {
  discussionsController,
};



