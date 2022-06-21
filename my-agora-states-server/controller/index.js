const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // if (req.query) {
    //   let filtered = discussionsData.slice(0, parseInt(req.query.limit));
    //   console.log(req.query);
    //   return res.status(200).json(filtered);
    // } else return res.status(200).json(discussionsData);
    // http://localhost:3001/discussions?limit=5

    if (req.query.limit) {
      let filtered = discussionsData.slice(0, parseInt(req.query.limit));
      return res.status(200).json(filtered);
    } else res.status(200).json(discussionsData);
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    const filtered = discussionsData.filter((item) => item.id == req.params.id);
    if (filtered.length > 0) return res.status(200).json(filtered[0]);
    else return res.status(404).json(null);
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    let post = {};
    post["id"] = discussionsData[0].id + 1;
    post["createdAt"] = new Date().toISOString();
    post["title"] = req.body.title;
    post["answer"] = null;
    post["author"] = req.body.author;
    post["bodyHTML"] = req.body.bodyHTML;
    discussionsData.unshift(post);
    return res.status(201).json(discussionsData);
  },
  //필요한 것: title,author,bodyHTML
  //   {
  //     "id": 2,
  //     "createdAt": "2022-04-22T14:06:03Z",
  //     "updatedAt": "2022-04-22T14:06:03Z",
  //     "title": "[notice] 질문 템플릿",
  //     "url": "https://github.com/codestates-seb/agora-states-fe/discussions/2",
  //     "author": "kimploo",
  //     "answer": null,
  //     "bodyHTML": "hi",
  //     "avatarUrl": "https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4"
  // }
  updateById: async (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    let data;
    discussionsData.forEach((item) => {
      if (req.params.id == item.id) {
        if (req.body.title !== undefined) {
          item.title = req.body.title;
        }
        if (req.body.bodyHTML !== undefined) {
          item.bodyHTML = req.body.bodyHTML;
        }

        item.createdAt = new Date().toISOString();
        data = item;
      }
    });

    // TODO:
    return res.status(200).json(data);
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
    //localhost:3001/discussions/45
    // if (req.params.id) {
    //   let filtered = discussionsData.filter((item) => item.id !== req.params.id);
    //   return res.status(200).json(filtered);
    // } else return res.status(200).json(discussionsData);
    if (req.params) {
      console.log(req.params);
      let list = discussionsData;
      if (req.params.id) {
        list = list.filter((item) => {
          return req.params.id != item.id;
        });
      }
      return res.status(200).json(list);
    }
  },
};

module.exports = {
  discussionsController,
};
