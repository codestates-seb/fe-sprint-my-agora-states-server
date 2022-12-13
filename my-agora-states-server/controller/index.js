const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { uuid } = req.params;

    const filtered_data = discussionsData.filter(
      (item) => item.id === Number(uuid)
    );
    if (filtered_data.length === 0) {
      return res.status(404).send("error!!");
    } else {
      return res.status(200).json(filtered_data[0]);
    }
  },
};

module.exports = {
  discussionsController,
};
