const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // res.send('TODO:')
    return res.json(discussionsData)
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // res.send('TODO:')
    const { id } = req.params; 
    const data = discussionsData.find(discussion => discussion.id === Number(id));
    if(data) {
      return res.status(200).json(data)
    } else {
      return res.status(404).send('Not found');
    }
  }
//   const { id } = req.params;
//   let filteredData = discussionsData.filter(discussion => {//req.params.id가 string 형태로 들어온다. Number로 변환
//     return discussion.id === Number(id);
//   })
//   if (filteredData.length === 0) { //필터되어 나온 게 없다면
//     return res.status(404).json('${id} is not found');
//   } else { //필터되서 나오면
//     return res.status(200).json(filteredData[0]);
//     //[0]으로 해야 출력됨
//   }
// }
};

module.exports = {
  discussionsController,
};
