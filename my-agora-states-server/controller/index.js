const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // res.send('TODO:')
    if (Object.keys(req.query).length === 0) {
      return res.status(200).json(discussionsData)
    }
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // res.send('TODO:')
    const { id } = req.params;
    // find 메서드를 활용한 findById
    const foundArray = discussionsData.find((v) => v.id === Number(id));
    if (foundArray) { return res.status(200).json(foundArray); }
    else { return res.status(404).send("Not found")}

    // filter 메서드를 활용한 findById
    // let filteredData = discussionsData.filter(discussion => {
    //   return discussion.id === Number(id)
    // })
    // if (filteredData.length === 0) {
    //   return res.status(404).json(`${id} is not found`)
    // } else {
    //   return res.status(200).json(filteredData[0])
    // }
  }

};

module.exports = {
  discussionsController,
};
