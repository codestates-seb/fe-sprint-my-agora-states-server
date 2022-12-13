const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;
const { v4: uuid } = require("uuid");

let newDiscussionData = discussionsData;

const discussionsController = {
  findAll: (req, res) => {
    return res.status(200).json(newDiscussionData);
  },

  findById: (req, res) => {
    const { id } = req.params;
    const param = Number(req.params.id);
    if (req.params !== undefined) {
      const filteredData = newDiscussionData.filter((data) => {
        return data.id === param;
      });

      return res.json(filteredData);
    }
  },

  create: (req, res) => {
    const discussion_uuid = uuid();
    const newDiscussion = Object.assign(req.body, { id: discussion_uuid });
    console.log("새로운 게시글이 추가되었습니다.");
    console.log(req.body);
    newDiscussionData.unshift(newDiscussion);

    return res.status(201).json(newDiscussion);
  },

  delete: (req, res) => {
    const { id } = req.params;
    const deletedData = newDiscussionData.filter((data) => {
      console.log("param : " + req.params.id);
      return String(data.id) !== req.params.id;
    });
    newDiscussionData = deletedData;

    console.log("id :" + req.params.id + " / 게시글이 삭제되었습니다.");
    return res.status(300).json();
  },
};

module.exports = {
  discussionsController,
};
