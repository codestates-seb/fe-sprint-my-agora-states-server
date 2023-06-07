const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

// POST /discussions id 값 1씩 증가
let lastId = 45; 
const generateId = () => {
  lastId+= 1;
  return lastId
}

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // /discussions?author={author} 요청을 수행
    const {author} = req.query;
    if (author) { 
      res.status(200).json(discussionsData.filter(discussion => discussion.author === author))
    } else {
      res.json(discussionsData)
    }
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const filteredDataById = discussionsData.filter(discussion => discussion.id === Number(id)) // req.params.id가 string 형태로 들어오기때문
    if(filteredDataById.length > 0) { // id와 일치하는 데이터가 존재하는 경우
      return res.status(200).json(filteredDataById[0]) 
    } else { // id와 일치하는 데이터가 존재하지 않는 경우
      return res.status(404).json({ error: "Discussion not found" }) 
    }
  },
  
  addById: (req, res) => {
    const discussionId = {...req.body, "id" : generateId() }; // id 1씩 증가
    discussionsData.unshift(discussionId); 
    return res.status(201).json(discussionId);    
  }, 

  updatedById: (req, res) => {
    const { id } = req.params; 
    const bodyData = req.body;
    if(id) {
      const discussionIdx = discussionsData.findIndex(discussion => discussion.id === Number(id)) // 수정하고자 하는 id의 데이터의 인덱스를 찾기
      if(discussionIdx !== -1) {// 일치하는 idx가 있으면
        discussionsData[discussionIdx] = {...discussionsData[discussionIdx], ...bodyData} // 해당 인덱스에 맞는 데이터를 요청된 데이터로 업데이트
        return res.status(200).json(discussionsData[discussionIdx])
      }
    } else {
      return res.status(404).json({ error: "Discussion not found" })
    }
  }, 

  deleteById: (req, res) => {
    const { id } = req.params;
    if (id) {
      const filteredDataById = discussionsData.filter(discussion => discussion.id !== Number(id)) // 요청한 id와 맞지 않는 데이터만 배열에 담아
      return res.status(200).json(filteredDataById) // 삭제된 데이터를 제외한 나머지를 보여줌.
    } else {
      return res.status(404).json({ error: "Discussion not found" })
    }
  }
};

module.exports = {
  discussionsController,
};
