const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;

function NowDate() {
  return (
    new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 19) + 'Z'
  );
}

let id = 45;

const discussionsController = {
  findAll: (req, res) => {
    const { limit, page } = req.query;
    // 1. 범위를 벗어난 limit 값이 들어오면 빈 배열을 반환해준다.
    if (limit > discussionsData.length) res.json([]);
    // 2. limit , page 가 없으면 전체 discussionsData를 보여준다.
    if (!limit && !page) return res.status(200).json(discussionsData);
    // 3. 페이지가 없고 , limit 값이 숫자가 아닌 경우 404 반환
    if (!page && isNaN(+limit)) return res.status(400).send('Bad Request T.T');
    // 4. 페이지는 있지만 limit이 없는 경우 10개씩 반환해준다. (Default 10)
    if (page && isNaN(+limit))
      return res.status(200).json(discussionsData.slice(0, 10));
    // 5. 페이지가 없고 limit만 있으면 limit 에 맞게끔 게시물을 반환한다.
    if (!page && limit) {
      return res.status(200).json(discussionsData.slice(0, limit));
    }
    // 6. Pagination : page에 limit개수만큼만 게시물을 보여준다.
    if (page && limit) {
      const total_page = Math.ceil(discussionsData.length / limit);
      // 만약 총 페이지 수보다 큰 페이지를 요구하면 404 반환
      if (page > total_page)
        return res.status(404).send('Request Page is big Current Page length');
      const offset = (page - 1) * limit;
      const limit_discussions = discussionsData.slice(offset, offset + +limit);
      return res
        .status(200)
        .json({ limit_discussions, total_page: new Array(total_page) });
    }
  },

  findById: (req, res) => {
    let { id } = req.params;
    const findDiscussion = discussionsData.find((discussion) => {
      return discussion.id === +id;
    });
    if (findDiscussion === undefined)
      return res.status(404).send('Page Not Found');
    return res.status(200).json(findDiscussion);
  },

  createOne: (req, res) => {
    const newDiscussion = {
      // 이후 생성되는 discussion 46 부터 시작해서 등록됨
      id: ++id,
      createdAt: NowDate(),
      updatedAt: NowDate(),
      avatarUrl: 'https://avatars.githubusercontent.com/u/65848374?s=40&v=4',
      ...req.body,
    };
    discussionsData.unshift(newDiscussion);
    res.status(201).send('Success Create New Discussion');
  },

  updateById: (req, res) => {
    const { id } = req.params;
    const { title, url, author, avatarUrl } = req.body;
    // 수정하려는 Discussion 찿기
    const find_discussion = discussionsData.find((discussion) => {
      return discussion.id === +id;
    });
    // PUT 메서드 실현하기 위해서 인덱스 위치 찿기
    const find_idx = discussionsData.findIndex((discussion) => {
      return discussion.id === +id;
    });
    // PUT DISCUSSIONS
    if (title) find_discussion.title = title;
    if (url) find_discussion.url = url;
    if (author) find_discussion.author = author;
    if (avatarUrl) find_discussion.avatarUrl = avatarUrl;
    // 기존 Discussion 새로바뀐 Discussion 업데이트
    discussionsData[find_idx] = find_discussion;
    return res.status(201).send('Successful Updated');
  },

  deleteById: (req, res) => {
    const { id } = req.params;
    const discussionsData = discussionsData.filter((discussion) => {
      return discussion.id !== +id;
    });
    return res.status(204).send(`discussion ${id} SuccessFul Delete`);
  },
};

module.exports = {
  discussionsController,
};
