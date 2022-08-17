const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).send(discussionsData);
    // console.log(discussionsData[0]);
    // return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    // let filtered = discussionsData.filter(
    //   (el) => el.id === Number(req.params.id)
    // );
    let found = discussionsData.find((el) => el.id === Number(req.params.id));

    if (found) {
      return res.status(200).send(
        // filtered.map((el) => {
        //   return {
        //     id: el.id,
        //     title: el.title,
        //     url: el.url,
        //     author: el.author,
        //     bodyHTML: el.bodyHTML,
        //     avatarUrl: el.avatarUrl,
        //   };
        // })
        found
      );
    } else return res.status(404).send("Not Found!");
  },
};

module.exports = {
  discussionsController,
};
