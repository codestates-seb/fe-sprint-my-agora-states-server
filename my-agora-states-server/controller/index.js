const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    if(Object.keys(req.query).length === 0) {
      return res.status(200).send(discussionsData);
    }
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;

    const filteredId = discussionsData.find((el) => el.id === parseInt(id));
    if (filteredId) {
      return res.status(200).json(filteredId);
    } else {
      return res.status(404).send(`${id}와 일치하는 데이터가 없습니다.`);
    }
  },

  // POST
  create: (req, res) => {
    const id = parseInt(discussionsData.length);
    const { author, title } = req.body;
    discussionsData.unshift({ id, author, title });
    res.location(`/discussions/:${id}`);
    return res.status(201).json(discussionsData[0]);
  },

  // PUT
  update: (req, res) => {
    const { id } = req.params;
    const bodyData = req.body;

    // el.id와 id가 같은 인덱스를 반환해준다.
    const beUpdatedIdx = discussionsData.findIndex((el) => el.id === parseInt(id));

    //최종적으로 업데이트된 discussionsData
    const updatedDiscussionsData = { ...discussionsData[beUpdatedIdx], ...bodyData }; 
    // beUpdatedIdx를 updatedDiscussionsData로 수정
    discussionsData.splice(beUpdatedIdx, 1, updatedDiscussionsData);
    
    return res.status(200).json(updatedDiscussionsData);
  },

  // DELETE
  delete: (req, res) => {
    const { id } = req.params;
    if(!validate(id)) return res.status(400).json('Bad request');
    discussionsData = discussionsData.filter((el) => el.id !== parseInt(id));
    return res.status(204).json("No Content"); 
  },
};

module.exports = {
  discussionsController,
};
