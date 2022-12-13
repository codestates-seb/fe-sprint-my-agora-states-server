const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData)
  },

  findById: (req, res, next) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    // const bodyData = req.body;

    let list = discussionsData;
    if(id){ // id가 입력이 되면 
      list = discussionsData.filter((e)=>e.id === Number(id)) // filter 결과값이 들어온 id 값이 있는 목록만 나온건데..
      if(list.length === 0){ // list 안에 아무 데이터가 없을 때 
        return res.status(404).send('Not Found!');
      }else return res.status(200).json(list[0]); // [] 배열 안에 있어서 밖으로 꺼내주려고 [0]
    }
  }
};
module.exports = {
  discussionsController,
};
