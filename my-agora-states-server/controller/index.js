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
      if (filter.length === 0) return res.status(200).json([]);
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

  createDiscussion: (req, res) => {
    const { name, title, question, avatarUrl } = req.body;
    const newData = {
      id: Date.now(),
      createdAt: new Date().toDateString("kr"),
      updatedAt: new Date().toDateString(),
      title: title,
      url: null,
      author: name,
      answer: null,
      bodyHTML: question.length > 0 ? question : "#",
      avatarUrl,
    };
    console.log(newData);
    discussionsData.unshift(newData);
    return res.json(newData);
  },
};

module.exports = {
  discussionsController,
};
