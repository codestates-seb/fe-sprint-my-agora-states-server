const { restart } = require("nodemon");
const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    const { limit, page } = req.query;
    const totalPage = Math.ceil(discussionsData.length / +limit);
    if (+limit > discussionsData.length - 1 || +page > totalPage)
      return res.status(200).json([]);
    else if ((limit && isNaN(+limit)) || (page && isNaN(+page)))
      return res.status(400).send("잘못된 요청 형식입니다.");
    else if (+limit && +page)
      return res
        .status(200)
        .json(discussionsData.slice(+limit * (+page - 1), +limit * +page));
    else if (+page) return res.status(200).json(discussionsData.slice(0, 10));
    else if (+limit)
      return res.status(200).json(discussionsData.slice(0, +limit));
    else return res.status(200).json(discussionsData);
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    let result = {};
    if (req.params.id) {
      result = discussionsData.find((el) => el.id === +req.params.id);
      return result
        ? res.status(200).json(result)
        : res.status(404).send("존재하지 않는 id입니다.");
    }
  },

  createOne: (req, res) => {
    // ADVANCED: 새로운 discussion을 생성합니다.
    discussionsData.unshift({
      id: discussionsData[0].id + 1,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      ...req.body,
    });

    return res.status(201).send("게시 성공");
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    let result = discussionsData;

    if (req.params.id)
      result = result.map((el) => {
        if (el.id === +req.params.id) {
          el = { ...el, ...req.body };
        }
        return el;
      });

    return res.status(200).send("수정 완료");
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
    let result = discussionsData;
    if (req.params.id) result = result.filter((el) => el.id !== +req.params.id);

    return res.status(204).send();
  },
};

module.exports = {
  discussionsController,
};
