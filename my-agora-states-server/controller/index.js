const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // get /discussions
    //id, title, url, author, bodyHTML, avatarUrl
    // let { id, title, url, author, bodyHTML, avatarUrl } = req.body;
    console.log(req.body[0]);
    if (Object.keys(req.query).length === 0) { //쿼리가 없을때
      return res.status(200).json(discussionsData);
    }
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    let filteredData = discussionsData.filter(discussion => {
      return discussion.id === Number(id);
    })
    if (filteredData.length === 0) {
      return res.status(404).json('${id} is no found');
    } else {
      return res.status(200).json(filteredData[0]);
    }
  }

};

module.exports = {
  discussionsController,
};
