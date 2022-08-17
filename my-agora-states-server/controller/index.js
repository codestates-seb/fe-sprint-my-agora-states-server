const { agoraStatesDiscussions } = require("../repository/discussions");
let discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.

    const { id } = req.params;
    let filterDiscussionData = discussionsData.filter(
      (ele) => ele.id === Number(req.params.id)
    );
    if (id && filterDiscussionData[0] !== undefined) {
      return res.status(200).json(...filterDiscussionData);
    }
    return res.status(200).send(discussionsData);
  },
  createOne: (req, res) => {
    console.log(req.body);
    // ADVANCED: 새로운 discussion을 생성합니다.
    const { createdAt, updatedAt, title, url, author, bodyHTML, avatarUrl } =
      req.body;
    discussionsData.unshift({
      createdAt: createdAt,
      updatedAt: updatedAt,
      title: title,
      url: url,
      author: author,
      bodyHTML: bodyHTML,
      avatarUrl: avatarUrl,
    });
    return res.status(200).json(discussionsData);
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    const { id } = req.params;
    const { updatedAt, title, avatarUrl, bodyHTML } = req.body;

    let reminderDiscussionData = discussionsData.filter(
      (ele) => ele.id !== Number(id)
    );
    let filterDiscussionData = discussionsData.filter(
      (ele) => ele.id === Number(id)
    );
    // 일치하는 데이터 찾는 필터
    console.log(req.body);
    if (req.body) {
      if (req.body.title && req.body.avatarUrl && req.body.bodyHTML) {
        filterDiscussionData = {
          id: Number(id),
          createdAt: filterDiscussionData[0].createdAt,
          updatedAt: updatedAt,
          title: title,
          url: filterDiscussionData[0].url,
          author: filterDiscussionData[0].author,
          bodyHTML: bodyHTML,
          avatarUrl: avatarUrl,
        };
      } else if (req.body.title && req.body.avatarUrl && !req.body.bodyHTML) {
        filterDiscussionData = {
          id: Number(id),
          createdAt: filterDiscussionData[0].createdAt,
          updatedAt: updatedAt,
          title: title,
          url: filterDiscussionData[0].url,
          author: filterDiscussionData[0].author,
          bodyHTML: filterDiscussionData[0].bodyHTML,
          avatarUrl: avatarUrl,
        };
      } else if (!req.body.title && req.body.avatarUrl && req.body.bodyHTML) {
        filterDiscussionData = {
          id: Number(id),
          createdAt: filterDiscussionData[0].createdAt,
          updatedAt: updatedAt,
          title: filterDiscussionData[0].title,
          url: filterDiscussionData[0].url,
          author: filterDiscussionData[0].author,
          bodyHTML: bodyHTML,
          avatarUrl: avatarUrl,
        };
      } else if (req.body.title && !req.body.avatarUrl && req.body.bodyHTML) {
        filterDiscussionData = {
          id: Number(id),
          createdAt: filterDiscussionData[0].createdAt,
          updatedAt: updatedAt,
          title: title,
          url: filterDiscussionData[0].url,
          author: filterDiscussionData[0].author,
          bodyHTML: bodyHTML,
          avatarUrl: filterDiscussionData[0].avatarUrl,
        };
      }
    }
    discussionsData = [filterDiscussionData, ...reminderDiscussionData];
    return res.status(201).json(discussionsData);
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
    const { id } = req.params;

    let filterDiscussionData = discussionsData.filter(
      (ele) => ele.id !== Number(id)
    );
    discussionsData = filterDiscussionData;
    res.status(201).json(discussionsData);
  },
};

module.exports = {
  discussionsController,
};
