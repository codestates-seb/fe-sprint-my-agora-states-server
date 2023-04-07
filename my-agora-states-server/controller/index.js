const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    const { question } = req.query;
    console.log(req.query.question);
    if (question) {
      const filter = discussionsData.filter(
        (item) =>
          item.title.includes(question) || item.author.includes(question)
      );
      if (filter.length === 0) return res.status(200).json(discussionsData);
      if (filter) return res.status(200).json(filter);
    }

    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const filter = discussionsData.filter((item) => item.id === Number(id))[0];
    if (!filter) return res.status(404).json({ fail: "Id doesn't exist" });
    return res.status(200).json(filter);
  },
};

module.exports = {
  discussionsController,
};
