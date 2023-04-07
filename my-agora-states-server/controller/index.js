const { agoraStatesDiscussions } = require('../repository/discussions');
const { v4: uuid } = require('uuid');
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    const { id } = req.params;
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const data = discussionsData.filter(
      (discussion) => discussion.id === Number(id)
    );
    if (0 < data.length) {
      return res.status(200).json(data[0]);
    } else {
      return res.status(404).json('Incorrect request');
    }
  },

  create: (req, res) => {
    // const discussion_uuid = uuid();
    const discussion_id = discussionsData[0].id + 1;
    const data = { id: discussion_id, ...req.body };
    discussionsData.unshift(data);
    return res.status(201).json(data);
  },

  deleteById: (req, res) => {
    const { id } = req.params;
    const discussionIndex = discussionsData.findIndex(
      (discussion) => discussion.id === Number(id)
    );
    if (0 <= discussionIndex) {
      const deleteDiscussion = discussionsData.splice(discussionIndex, 1);
      return res.status(200).json(deleteDiscussion);
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  },

  editById: (req, res) => {
    const { id } = req.params;
    const bodyData = req.body;

    const discussionIndex = discussionsData.findIndex(
      (discussion) => discussion.id === Number(id)
    );

    if (0 <= discussionIndex) {
      Object.assign(discussionsData[discussionIndex], bodyData);
      return res.status(200).json(discussionsData[discussionIndex]);
    } else {
      return res.status(404).json({ error: 'User not found' });
    }
  },
};

module.exports = {
  discussionsController,
};
