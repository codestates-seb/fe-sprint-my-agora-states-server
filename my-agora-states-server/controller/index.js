const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    console.log("discussions/ findAll");
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id: reqID } = req.params;
    const discussionsDataFilter = discussionsData.filter(
      (el) => el.id === +reqID
    );
    if (discussionsDataFilter.length) {
      // const { id, title, url, author, bodyHTML, avatarUrl } =
      //   discussionsDataFilter[0];
      // res.status(200).json({ id, title, url, author, bodyHTML, avatarUrl });
      res.status(200).json(discussionsDataFilter[0]);
    } else res.status(404).send("There is no ID number.");
  },
};

module.exports = {
  discussionsController,
};
