const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // res.send("TODO:");
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // res.send("TODO:");

    const { id } = req.params; // params 문자열로 들어옴
    const filtered = discussionsData.filter(
      (el) => el.id === Number(id) // 문자열로 들어오니까 숫자로
    );

    if (filtered.length > 0) {
      return res.status(200).json(filtered[0]);
    } else {
      return res.status(404).json(filtered);
    }
    // const data = discussionsData.find((el) => el.id === Number(req.params.id));
    // if (!data) return res.status(404).send("Not found");
    // return res.status(200).json(data);
  },
};

module.exports = {
  discussionsController,
};