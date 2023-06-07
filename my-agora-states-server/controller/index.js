const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  // TODO: 모든 discussions 목록을 응답합니다.
  // 쿼리스트링 만드는건 req.query 메서드 사용
  findAll: (req, res) => {
    const { author } = req.query;
    let filterAuthor = discussionsData;
    if (req.query.author) {
      filterAuthor = filterAuthor.filter((discussion) => {
        return discussion.author === req.query.author;
      });
      return res.status(200).json(filterAuthor);
    } else {
      res.status(200).json(discussionsData);
    }
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    let filteredDiscussions = discussionsData.filter((discussion) => discussion.id === parseInt(id));

    if (filteredDiscussions.length !== 0) {
      return res.status(200).json(filteredDiscussions[0]);
    } else {
      return res.status(404).json("NOT FOUND");
    }
  },
};

module.exports = {
  discussionsController,
};
