const { agoraStatesDiscussions } = require('../repository/discussions');
const discussionsData = agoraStatesDiscussions;
const divide = (arr, count) => {
  let result = [];
  for (let i = 0; i < arr.length; i += count) {
    const value = arr.slice(i, i + count);
    result.push(value);
  }
  return result;
};

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    if (!Object.keys(req.query).length)
      return res.status(200).json(discussionsData);
    let { page, limit } = req.query;
    page = Number(page);
    limit = Number(limit);
    if (isNaN(page) && isNaN(limit)) return res.status(400).end();
    if (limit > discussionsData.length) return res.status(200).json([]);
    if (page && limit) {
      const paged = divide(discussionsData, limit)[page - 1];
      return res.status(200).json(paged);
    }
    if (page && !limit) {
      const paged = divide(discussionsData, 10)[page - 1];
      return res.status(200).json(paged);
    }
    if (!page && limit) {
      return res.status(200).json(discussionsData.slice(0, limit));
    }
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    let idArr = [];
    const getId = discussionsData.filter(el => idArr.push(String(el.id)));

    if (idArr.indexOf(req.params.id) !== -1) {
      const data = discussionsData.filter(
        el => String(el.id) === req.params.id
      );
      return res.json(...data);
    } else {
      res.status(404).send('해당 id의 discussion이 존재하지 않습니다.');
    }
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    const newDiscussionsData = discussionsData.unshift(req.body);
    return res.status(201).json(newDiscussionsData);
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    const data = discussionsData.filter(el => String(el.id) === req.params.id);
    const updatedData = Object.assign(...data, req.body);
    return res.status(200).json(updatedData);
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
    const data = discussionsData.filter(el => String(el.id) !== req.params.id);
    return res.status(200).json(data);
  },
};

module.exports = {
  discussionsController,
};
