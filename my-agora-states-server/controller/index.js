const { agoraStatesDiscussions } = require("../repository/discussions");
let discussionsData = agoraStatesDiscussions;

const getPageStartEnd = (limit, page) => {
  const pageStart = Number(page - 1) * Number(limit);
  const pageEnd = Number(pageStart) + Number(limit);
  return { pageStart, pageEnd };
};

const handleRequestBody = (req, res) => {
  if (!req.body) return res.status(400).send("no request body");
  const { title, author, bodyHTML } = req.body;
  if (!title && !author && !bodyHTML)
    return res.status(400).send("bad request");
  return true;
};

const discussionsController = {
  // [GET] /discussions?query={query} 요청을 수행
  findAll: (req, res) => {
    if (req.query.query) {
      const filteredDiscussions = discussionsData.filter((discussion) => {
        return discussion.title.toUpperCase().includes(req.query.query.toUpperCase())
      });
      return res.status(200).json(filteredDiscussions) 
    }
    res.status(200).send(discussionsData)    // query 없으면 전체 데이터
  },

  // [GET] /discussions/:id 요청을 수행 (요청으로 들어온 id와 일치하는 discussion을 응답)
  findById: (req, res) => {
    const id = req.params.id;
    const idNumber = Number(id)
    if (id) {
      const filteredDiscussionsById = discussionsData.filter((discussion) => discussion.id === idNumber )
      if (filteredDiscussionsById.length === 0) {
        return res.status(404).json(`there is no posting by Id(${id}) you were searching for`)
      }
      return res.status(200).json(filteredDiscussionsById[0])
    } 
  },

  create: (req, res) => {
    const discussionInfo = {...req.body, "id" : Math.random()}
    discussionsData.unshift(discussionInfo)
    return res.status(201).json(discussionInfo)
    // return res.status(201).json(`Successfully uploaded : ${JSON.stringify(discussionInfo)}`)
  },

  update: (req, res) => {
    const {id} = req.params;
    const idNumber = Number(id)
    const bodyData = req.body; // 업데이트 희망하는 데이터

    if (id) {
      const filteredDiscussionsById = discussionsData.filter((discussion) => discussion.id === idNumber ) // 찾음 
      if (filteredDiscussionsById.length === 0) {
        return res.status(404).json(`there is no posting by Id(${id}) you were searching for`)
      }
      filteredDiscussionsById[0] = {...filteredDiscussionsById[0], ...bodyData}
      return res.status(200).json(filteredDiscussionsById[0])  // 업데이트 
    } 
  },

  deleteByPostingId: (req, res) => {
    const {id} = req.params;
    const idNumber = Number(id)
    if (id) {
      const filteredDiscussionsById = discussionsData.filter((discussion) => discussion.id === idNumber ) // 찾음 
      if (filteredDiscussionsById.length === 0) {
        return res.status(404).json(`there is no posting by Id(${id}) you were searching for`)
      }
      discussionsData = discussionsData.filter((discussion) => discussion.id !== idNumber )
      return res.status(200).json(filteredDiscussionsById[0])  // 업데이트 
    } 
  }

};

module.exports = {
  discussionsController,
};
