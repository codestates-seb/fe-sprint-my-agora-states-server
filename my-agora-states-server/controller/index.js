const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.

    const {author} = req.query

    if (author) {
      res.status(200).json(discussionsData.filter((item) => item.author === author));
    } else {
      res.status(200).json(discussionsData);
    }

    
  },

  findById: (req, res) => {
    // TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.

    const { id } = req.params;

    const findIdDiscussionsData = discussionsData.find((discussion) => discussion.id === Number(id));

    if (!findIdDiscussionsData) {
      return res.status(404).json('error: discussion 없음');
    }
    
    res.status(200).json(findIdDiscussionsData)
  },

  update: (req, res) => {
    const { id } = req.params;
    const bodyData = req.body;

    const discussionsDataIndex = discussionsData.findIndex(discussion => discussion.id === Number(id));
      if (discussionsDataIndex !== -1) {
        if (bodyData && bodyData.title) {
          discussionsData[discussionsDataIndex].title = bodyData.title;
        }
        if (bodyData && bodyData.author) {
          discussionsData[discussionsDataIndex].author = bodyData.author;
        }
        if (bodyData && bodyData.bodyHTML) {
          discussionsData[discussionsDataIndex].bodyHTML = bodyData.bodyHTML;
        }

      res.status(200).json(discussionsData[discussionsDataIndex]);
    }

  },

  create: (req, res) => {
    console.log(req.body);
    const { id, createdAt, updatedAt, title , url , author , answer , bodyHTML , avatarUrl } = req.body;

    
    const createDiscussion = {
      id: id,
      createdAt: createdAt,
      updatedAt: updatedAt,
      title: title,
      url: url,
      author: author,
      answer: answer,
      bodyHTML: bodyHTML,
      avatarUrl: avatarUrl
    };

    
    
    if (!createDiscussion) {
      return res.status(400).json('error: discussion 못만듬');
    } else {
      discussionsData.push(createDiscussion);
      return res.status(201).json(createDiscussion);
    }

    
  },

  // 포스트만~ 테스트용
  // {
  //   "id": 43,
  //   "createdAt": "2022-05-16T01:02:17Z",
  //   "updatedAt": "2022-05-16T01:02:17Z",
  //   "title": "Some title",
  //   "url": "https://some.url",
  //   "author": "Some author",
  //   "answer": {
  //     "id": "Some id",
  //     "createdAt": "2022-05-16T01:02:17Z",
  //     "url": "https://some.url",
  //     "author": "Some author",
  //     "bodyHTML": "<p>Some HTML</p>",
  //     "avatarUrl": "https://some.url"
  //   },
  //   "bodyHTML": "<p>Some HTML</p>",
  //   "avatarUrl": "https://some.url"
  // }


  deletep: (req, res) => {
    const { id } = req.params;

    const index = discussionsData.findIndex(discussion => discussion.id === Number(id));
    
    if (index === -1) {
      return res.status(404).json('error: discussion 없음 ');
    }

    discussionsData.splice(index, 1);
    res.status(200).json('message: Discussion 삭제');
}
  

};

module.exports = {
  discussionsController,
};
