const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // ? TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData)
  },

  findById: (req, res) => {
    // ? TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const data = discussionsData.find((item) => item.id === parseInt(id))

    if(!data){
      res.status(404).json({message: 'Data not found'})
    } else {
      res.status(200).json(data);
    }

  },

  //* POST : 새로운 discussion을 생성합니다.
  createDiscussion: (req, res) => {
    const { title, author } = req.body;

    const newDiscussion = {
      "id": agoraStatesDiscussions.length + 100,
      "createdAt": new Date(),
      "title": title,
      "author": author,
    }
    discussionsData.unshift(newDiscussion)
    res.json(newDiscussion)

  },

  //* DELETE : discussion을 삭제합니다.
  deleteDiscussion: (req, res) => {
    const { id } = req.params;
    const index = discussionsData.findIndex((item) => item.id === parseInt(id))

    if(index === -1){
      return res.status(404).json({ message: 'Booking not found' })
    }

    const deletedDiscussion = discussionsData.splice(index, 1)[0];
    res.json({ id: deletedDiscussion.id })
  },

  //* PUT : discussion을 수정합니다.
  update: (req, res) => {
    const { id } = req.params;
    const bodyData = req.body;

    const discussion = discussionsData.find((item) => item.id === parseInt(id))

    if(!discussion) {
      return res.status(404).json({ message: "Flight not found" });
    }

    // 제목 수정
    if(bodyData.title){
      discussion.title = bodyData.title;
    }

    return res.json(discussion)
  }

};

module.exports = {
  discussionsController,
};
