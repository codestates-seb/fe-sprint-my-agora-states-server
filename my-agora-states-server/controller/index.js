const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
    // let responseBody = discussionsData
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    // if (req.params.id !== undefined) {
    //   console.log(req.params.id);
    //   let filter = discussionsData.filter((el) => {
    //     return el.id === Number(req.params.id);
    //   });
    //   if (filter.length > 0) {
    //     return res.status(200).json(...filter);
    //   } else {
    //     return res.status(404).json().end();
    //   }
    // return res.status(200).json(found);
    // }
    const { id } = req.params;
    const found = discussionsData.find((d) => d.id === Number(id));
    if (found) {
      return res.status(200).json(found);
    } else {
      return res.status(404).send("Not Found");
    }
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    const { title, author, bodyHTML, avatarUrl } = req.body;
    console.log(req.body, req.url);
    const id = parseInt(Math.random() * 10000);
    const url =
      "https://github.com/codestates-seb/agora-states-fe/discussions/" + id;
    const newDiscussion = {
      id,
      createdAt: new Date().toISOString(),
      title,
      url,
      author,
      answer: null,
      bodyHTML,
      avatarUrl,
    };
    discussionsData.unshift(newDiscussion);
    return res.status(201).end();
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    let { id } = req.params;
    let data = req.body;
    let index = discussionsData.findIndex((el) => el.id === Number(id));
    if (index !== -1) {
      discussionsData[index] = data;
      res.status(200).json(discussionsData);
    }
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
    let index = discussionsData.findIndex(
      (el) => el.id === Number(req.params.id)
    );
    console.log("index", index);
    if (index !== -1) {
      discussionsData.splice(index, 1);
      res.status(200).json(discussionsData);
    }
  },
};

module.exports = {
  discussionsController,
};
