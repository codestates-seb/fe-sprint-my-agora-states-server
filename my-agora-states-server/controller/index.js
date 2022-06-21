const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // if (req.query.query !== undefined) {
    //   return res.status(200).json(discussionsData);
    // }
    res.status(200).json(discussionsData);
  
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    const id = req.params.id;
    console.log(req.params)
    // console.log(typeof id)
    // console.log(req.query)
    const data = discussionsData.filter(discussion => discussion.id === Number(id));
    if (data.length !== 0) {
      // const { id, title, url, author, bodyHTML, avatarUrl} = data[0]
      // const bodyData = {
      //   id,
      //   title,
      //   url,
      //   author,
      //   bodyHTML,
      //   avatarUrl
      // };
      // console.log(bodyData)
      return res.status(200).json(data[0]);
    } else {
      return res.status(404).end();
    }
    
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
  },
};

module.exports = {
  discussionsController,
};
