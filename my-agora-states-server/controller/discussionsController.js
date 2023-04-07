const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
const { v4: uuid } = require('uuid');

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    let filteredData = discussionsData.find((discussion) => discussion.id === Number(id));
    if (filteredData) {
      return res.status(200).json(filteredData);
    } else {
      return res.status(404).json(`${id} is not found`);
    }
  },

  create: (req, res) => {
    const discussion_uuid = uuid();
    if (discussion_uuid) {
      const newDiscussion = Object.assign(req.body, { id: discussion_uuid });
      discussionsData.unshift(newDiscussion);
    }
    return res.status(201).json(discussionsData);
  },

  // 아직 제대로 기능 안됨 ㅜㅜ
  update: (req, res) => {
    const {discussion_uuid} = req.params;
    const updateData = discussionsData.find((item) => item.discussion_uuid === discussion_uuid);
    if (updateData === undefined) {
      return res.status(404).send('Your uuid is not found');
    } else {
      updateData = req.body;
      console.log(updateData);
      return res.status(200).json(updateData);
    }
    
  },

  // 아직 제대로 기능 안됨 ㅜㅜ
  deleteByDiscussionId: (req, res) => {
    const { discussion_uuid } = req.params;
    const deleteData = discussionsData.find((item) => item.discussion_uuid === discussion_uuid);
    if (deleteData === undefined) {
      return res.status(404).send('Your uuid is not found');
    } else {
      const index = deleteData.indexOf(deleteData);
      console.log(index);
      deleteData.splice(index, 1);
      return res.status(200).send('Completed delete');
    }
  }
};

module.exports = {
  discussionsController,
};
