const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.

    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    console.log(id);

    const filteredData = discussionsData.filter(
      (discussion) => String(discussion.id) === id
    );

    console.table(`findById: ${filteredData}`);
    console.log(`filteredData.length: ${filteredData.length}`);
    if (filteredData.length === 0) return res.status(404).json("no data found");
    return res.status(200).json(filteredData[0]);
  },
};

module.exports = {
  discussionsController,
};
