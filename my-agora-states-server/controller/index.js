const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
let discussion = [];

const handleRequestBody = (req, res) => {
  if (!req.body) {
    return res.status(400).send("no request body");
  }
  
  const { title, author, bodyHTML } = req.body;
  
  if (!title && !author && !bodyHTML) {
    return res.status(400).send("bad request")
  }

  return true;
}

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    let list = discussionsData;
    if (req.params) {
      // console.log(req.params)
      // console.log(req.params.id)
      // console.log(typeof req.params.id)
      list = list.filter((item)=>{ return item.id === Number(req.params.id)})
      if (list.length > 0) {
        return res.status(200).json(list[0]);
      } else {
        return res.sendStatus(404);
      }
    } 
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    // discussion.push(req.body)
    // return res.status(200)
    const { title, author, bodyHTML, avatarUrl } = req.body;
    console.log(req.body, req.url)
    if (handleRequestBody(req, res) !== true) return;
    const id = parseInt(Math.random() * 10000)
    const url = "https://github.com/codestates-seb/agora-states-fe/discussions/" + id
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
    return res.status(201).send("resource created successfully: ID " + id);
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    // let discussionsData;
    // if (req.params) {
    //   data = discussionsData.filter((item) => { return item.id === req.params.id})
    //   data = Object.assign(data[0], req.body)
    // }
    // return res.status(200).json(data);
    if (handleRequestBody(req, res) !== true) return;
    const idx = discussionsData.findIndex((item) => item.id === Number(req.params.id));
    const updated = {
      ...discussionsData[idx],
      ...req.body,
      updatedAt: new Date().toISOString()
    };

    if (idx !== -1) { 
      discussionsData.splice(idx, 1, updated);
      return res.status(200).send("resource updated successfully");
    } else {
      return res.status(404).send("Not found");
    }
  },

//   deleteById: (req, res) => {
//     // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
//     let list = discussion;
//     if (req.params){
//       list = list.filter((item)=>{ return item.id === Number(req.params.id)})
//       return res.status(200)
//     }
//   },
// };
deleteById: (req, res) => {
  const idx = discussionsData.findIndex((item) => item.id === Number(req.params.id));
  if (idx !== -1) {
    discussionsData.splice(idx, 1);
    return res.status(202).send("resource deleted successfully");
  } else {
    return res.status(404).send("Not found");
  }
},
};

module.exports = {
  discussionsController,
};
