const { agoraStatesDiscussions } = require("../repository/discussions");
const { v4: uuid } = require("uuid");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  // GET
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
    const { id } = req.params;
    const discussionDataById = discussionsData.filter(
      // id는 문자열, discussion id는 숫자
      (discussion) => discussion.id.toString() === id
    );
    if (discussionDataById.length > 0) {
      /*const body = discussionDataById.map(
        ({ id, title, url, author, bodyHTML, avatar }) => {
          return {
            id,
            title,
            url,
            author,
            bodyHTML,
            avatar,
          };
        }
      );*/
      res.status(200).json(...discussionDataById);
    } else {
      res.status(404).json("Not Found");
    }
  },

  // POST - 서버에서 생성된 id, createdAt만 반환하기
  createPost: (req, res) => {
    const id = uuid();
    const createdAt = Date.now();
    const { title, url, author, bodyHTML, avatarUrl } = req.body;
    if (title && bodyHTML) {
      const newPost = {
        id,
        createdAt,
        title,
        url,
        author,
        bodyHTML,
        avatarUrl,
      };
      discussionsData.unshift(newPost);
      res.status(201).json({ id, createdAt });
    } else {
      res.status(404).json("Not Found");
    }
  },

  // PUT - path parameter로 id만 받고 body에 title, bodyHTML 받기
  modifyPost: (req, res) => {
    const { id } = req.params;
    const { title, bodyHTML } = req.body;
    const modifiedAt = Date.now();
    const targetDiscussion = discussionsData.find(
      (discussion) => discussion.id.toString() === id
    );
    if (targetDiscussion) {
      if (!title && !bodyHTML) {
        res.status(200).json("No change");
      } else {
        if (title) targetDiscussion.title = title;
        if (bodyHTML) targetDiscussion.bodyHTML = bodyHTML;
        targetDiscussion.modifiedAt = modifiedAt;
        res.status(201).json(targetDiscussion);
      }
    } else {
      res.status(404).json();
    }
  },

  deletePost: (req, res) => {
    const { id } = req.params;
    const targetDiscussionIdx = discussionsData.findIndex(
      (discussion) => discussion.id.toString() === id
    );
    if (targetDiscussionIdx + 1) {
      discussionsData.splice(targetDiscussionIdx, 1);
      res.status(200).json(`Deleted ${id}`);
    } else {
      res.status(204).json("No Content");
    }
  },
};

module.exports = {
  discussionsController,
  discussionsData,
};
