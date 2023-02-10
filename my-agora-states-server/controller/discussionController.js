const { v4: uuid } = require('uuid');

const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    res.status(200).send(discussionsData);
  },

  findById: (req, res) => {

    const { uuid } = req.params;
    if (uuid) {
      const uuidFiltered = discussionsData.find((el) => // 하나만 찾을 때는 find로. 찾은 요소를 리턴
        el.id === Number(uuid)
      )
      if(!uuidFiltered) return res.status(404).send();
      return res.status(200).send(uuidFiltered);
    }
  },

  create: (req, res) => {
    console.log(req.body);
    const discussion_uuid = uuid();
    const { title } = req.body;
    const { author } = req.body;

    const newDiscussion = {
      "id": discussion_uuid,
      "createdAt": new Date(),
      "title": title,
      "url": "https://github.com/codestates-seb/agora-states-fe/discussions/4",
      "author": author,
      "answer": null,
      "avatarUrl": "https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4",
    }

    agoraStatesDiscussions.unshift(newDiscussion);
    res.status(201).json(agoraStatesDiscussions);
  },

  update: (req, res) => {
    console.log(req.body);
    const { uuid } = req.params;
    const bodyData = req.body;
    const index = agoraStatesDiscussions.findIndex((el) => String(el.id) === uuid);
    const updatedDiscussion = { ...agoraStatesDiscussions[index], ...bodyData };
    agoraStatesDiscussions.splice(index, 1, updatedDiscussion)

    return res.status(200).json(agoraStatesDiscussions);
  },

  deleteById: (req, res) => {
    console.log(req.params);
    const { id } = req.params;
    const index = agoraStatesDiscussions.findIndex((el) => String(el.id) === id);
    agoraStatesDiscussions.splice(index, 1);
    return res.status(200).json(agoraStatesDiscussions);
  }
};

module.exports = {
  discussionsController,
};
