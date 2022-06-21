const { open, writeFile, readFile } = require('fs/promises');
const { close } = require('fs')

const { agoraStatesDiscussions } = require("../repository/discussions");
const { nextTick } = require('process');
const jsonPath = './my-agora-states-server/repository/discussions.json';

const getDiscussionsData = async (path = jsonPath) => {
  const file = await open(path);
  const data = await file.readFile({ encoding: 'utf-8' });

  file.on('close', () => console.log("파일 닫힘"))
  file.close()

  return JSON.parse(data);
}

/* const idGenerator = (async () => {
  const { data, descriptor } = await getDiscussionsData();
  const length = data.length;

  close(descriptor);

  return function () {
    
    return ++length;
  };
})(); */

// console.log(process.cwd())
// writeFile('./my-agora-states-server/repository/discussions.json', JSON.stringify(agoraStatesDiscussions))  

class Discuss {
  constructor({ title, author, }) {
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.title = title;
    this.url = "";
    this.author = author;
    this.answer = null;
    this.bodyHTML = "";
    this.avatarUrl = "";
  }
}

const PaginationError = (limit, page, lastPage) => {
  let errMsg = "";

  if (Number.isNaN(limit)) {
    errMsg = "limit 파라미터는 숫자값이어야 합니다.";
  }
  else if (Number.isNaN(page)) {
    errMsg = "page 파라미터는 숫자값이어야 합니다.";
  }
  else if (page > lastPage) {
    errMsg = "페이지를 벗어났습니다.";
  } else {
    return;
  }

  return new Error(errMsg);
}

const discussionsController = {

  findAll: async (req, res, next) => {
    const data = await getDiscussionsData();
    const { query } = req;
    const limit = Number(query?.limit || 10);
    const page = Number(query?.page || 1);
    const lastPage = Math.ceil(data.length / limit);

    const err = PaginationError(limit, page, lastPage)  // 에러 핸들러
    if (err) {
      next(err);
      return;
    };

    const pagedDate = data.filter((el, i) => {
      return (page - 1) * limit <= i && i < page * limit
    })

    res.json({ data: pagedDate, maxPage: lastPage });
  },


  findById: async (req, res, next) => {
    const data = await getDiscussionsData();
    const reqID = Number(req.params.id);
    const filtered = data.filter((el) => el.id === reqID);

    if (filtered.length < 1) {  // 에러 핸들러
      /* throw new Error("유효하지 않은 ID"); */
      next(new Error("유효하지 않은 ID"));
      return;
    }

    res.json(filtered);
  },


  createOne: async (req, res) => {
    const newData = new Discuss({ ...req.body });
    const data = await getDiscussionsData();

    newData.id = data.length + 100;
    data.unshift(newData);

    res.status(201).json({ newDiscussionID: newData.id });
    writeFile(jsonPath, JSON.stringify(data));
  },


  updateById: async (req, res) => {
    const { id } = req.params;
    const data = await getDiscussionsData();
    const editedData = data.map((el) => {
      if (el.id === id) {
        return { ...el, ...req.body }
      }
      return el;
    });

    res.status(201).json({ editedDiscussionID: id });
    writeFile(jsonPath, JSON.stringify(editedData));
  },


  deleteById: async (req, res) => {
    const { id } = req.params;
    const data = await getDiscussionsData();
    const editedData = data.filter((el) => el.id === id);

    res.status(200).json({ deletedDiscussionID: id });
    writeFile(jsonPath, JSON.stringify(editedData));
  },
};

module.exports = {
  discussionsController,
};
