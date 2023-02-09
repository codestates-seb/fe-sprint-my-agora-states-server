const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // console.log("더미: ", discussionsData)
    res.status(200).json(discussionsData);
    // res.send('TODO:dd')
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
  const { id } = req.params;
  const discussion = discussionsData.find(el => Number(id) === el.id);

  !discussion 
  ? res.status(404).json({ message: 'Not Found' })
  : res.status(200).json(discussion);
  
}
  // console.log("id조회 : ",id)
  // console.log("필터 : ",filtered[0])

  // const discussion = discussionsData
  // .filter(el =>  Number(id) === el.id);

  // discussion[0] === undefined
  // ? res.status(404).json('Not Found')
  // : res.status(200).json(discussion[0]);
}

module.exports = {
  discussionsController,
};

