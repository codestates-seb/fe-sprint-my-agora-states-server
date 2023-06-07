const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.

    const {author} = req.query

    if (author) {
      res.status(200).json(discussionsData.filter((item) => item.author === author));
    } else {
      res.status(200).json(discussionsData);
    }

    
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.

    const { id } = req.params;

    const findIdDiscussionsData = discussionsData.find((discussion) => discussion.id === Number(id));

    if (!findIdDiscussionsData) {
      return res.status(404).json({ error: "discussion 없음" });
    }
    
    res.status(200).json(findIdDiscussionsData)
  }

};

module.exports = {
  discussionsController,
};
