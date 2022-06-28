const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const divide = (count, arr) => {
  const result = [];
  for(let i = 0; i < arr.length; i += count) result.push(arr.slice(i, i + count));
  return result;
}

const isParams = (page, limit) => {
  if(isNaN(page) && isNaN(limit)) return true;
  return false;
}

const discussionsController = {
  findAll: (req, res) => {
    if (!Object.keys(req.query).length) return res.status(200).json(discussionsData);
    let { page, limit } = req.query;
    page = Number(page);
    limit = Number(limit);
    if (isParams(page, limit)) return res.status(400).end();
    if (limit > discussionsData.length) return res.status(200).json([]);
    let temp;
    if (page && limit) {
      // page와 limit가 있는 경우
      temp = divide(limit, discussionsData)[page - 1];
      return res.status(200).json(temp);
    } else if (page && !limit) {
      // page는 있으며 limit가 없는 경우
      temp = divide(10, discussionsData)[page - 1];
      return res.status(200).json(temp);
    } else {
      // page는 없으며 limit는 있는 경우
      temp = discussionsData.slice(0, limit);
      return res.status(200).json(temp);
    }
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    const id = Number(req.params.id);
    let index = 0;
    for(let data of discussionsData) {
      if (data.id === id) {
        index = id
        break;
      };
    }
    if (index === 0) return res.status(404).end();
    const [ temp ] = discussionsData.filter((item) => item.id === id);
    return res.status(200).json(temp);
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
  },
};

module.exports = {
  discussionsController,
};
