const { restart } = require("nodemon");
const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const getPagination = (limit, page) => {
  const pageStart = Number(page - 1) * Number(limit);
  const pageEnd = Number(pageStart) + Number(limit);
  return { pageStart, pageEnd };
};

const handleRequestBody = (req, res) => {
  if (!req.body) {
    return res.status(400).send("No request body!!");
  }
  const { title, author, bodyHTML } = req.body;
  if (!title && !author && !bodyHTML) {
    return res.status(400).send("Bad request");
  }
  return true;
};

const discussionsController = {
  findAll: (req, res) => {
    // TODO: 모든 discussions 목록을 응답합니다.
    // return res.status(200).json(discussionsData);

    // ADVANCED: 테스트 케이스에 맞게 페이지네이션을 구현합니다.
    const { limit, page } = req.query;

    let responseBody = discussionsData;
    if (!limit && !page) {
      return res.status(200).json(responseBody);
    }

    if (limit && page) {
      if (!Number(limit) || !Number(page)) {
        return res.status(400).send();
      }
      const { pageStart, pageEnd } = getPagination(limit, page);
      return res.status(200).json(responseBody.slice(pageStart, pageEnd));
    }

    if (limit) {
      // page가 없을 경우 첫 페이지 응답
      if (!Number(limit)) {
        return res.status(400).send();
      }
      const { pageStart, pageEnd } = getPagination(limit, 1);
      return res.status(200).json(responseBody.slice(pageStart, pageEnd));
    }

    if (page) {
      // limit가 없을 경우 1page 당 10개씩
      if (!Number(page)) {
        return res.status(400).send();
      }
      const { pageStart, pageEnd } = getPagination(10, page);
      return res.status(200).json(responseBody.slice(pageStart, pageEnd));
    }
    return res.status(404).send("Not found");
  },

  findById: (req, res) => {
    // TODO: path parameter id를 가진 discussion을 응답합니다.
    // req.params.id가 문자열이기 때문에 Number()로 형변환.

    // 1.
    // const { id } = req.params;

    // const data = discussionsData.filter(
    //   (item) => Number(item.id) === Number(id)
    // );
    // if (data.length === 0) {
    //   return res.status(404).end();
    // }
    // return res.status(200).json(data[0]);

    // 2. reference
    // const { id } = req.params;
    // const found = discussionsData.find((d) => d.id === Number(id));

    // if (found) {
    //   return res.status(200).json(found);
    // } else {
    //   return res.status(404).send("Not found");
    // }

    // 3.
    if (req.params) {
      const idx = discussionsData.find((el) => el.id === Number(req.params.id));
      if (idx !== undefined) {
        res.status(200).json(idx);
      }
    }
    res.status(404).send("Not found");
  },

  createOne: (req, res) => {
    // POST는 body에서 raw로 JSON을 선택해서 적어줘서 보내줘야 응답한다.
    // ADVANCED: 새로운 discussion을 생성합니다.
    // console.log(req.body);
    const newItem = req.body;
    discussionsData.unshift(newItem);

    return res.status(200).send("생성되었습니다.");
  },

  updateById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 요청에 맞게 변경합니다.
    const updated = discussionsData.filter(
      (el) => el.id === Number(req.body.id)
    );
    const change = { ...updated[0], ...req.body }; //updated는 배열 안에 객체가 있는 형태이므로 index [0]을 가져옴
    // const change = Object.assign(updated[0], req.body);
    const idx = discussionsData.findIndex(
      (el) => el.id === Number(req.params.id)
    );

    discussionsData.splice(idx, 1, change);
    // console.log(change);

    return res.status(200).json(change);
  },

  deleteById: (req, res) => {
    // ADVANCED: path parameter id를 가진 discussion을 삭제합니다.
    // path parameter에 써준 id 값과 같은 id의 index를 찾음
    const deleted = discussionsData.findIndex(
      (el) => el.id === Number(req.params.id)
    );
    // 원본 배열에서 삭제할 id 값에 해당하는 index를 삭제
    // splice()
    discussionsData.splice(deleted, 1);
    return res.status(200).json();
  },
};

module.exports = {
  discussionsController,
};
