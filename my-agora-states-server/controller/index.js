const { showCompletionScript } = require("yargs");
const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    let list = discussionsData.filter((item) => {
      return Number(id) === item.id;
    });
    // console.log("list: ", list);
    // console.log("list.length: ", list.length);
    if (list.length > 0) {
      return res.status(200).json(list[0]);
    } else {
      return res.status(404).json({ message: "There is no matching data" });
    }
  },
};

module.exports = {
  discussionsController,
};
