const { open, writeFile } = require('fs/promises');

const { agoraStatesDiscussions } = require("../repository/discussions");
const jsonPath = './my-agora-states-server/repository/discussions.json';
/* const initialData = getDiscussionsData(); */

async function getDiscussionsData(path = jsonPath) {
  console.log("0. getDiscussionsData 함수 실행");
  const file = await open(path);
  console.log(file);
  console.log("1. 파일 열기 완료");
  const data = await file.readFile({ encoding: 'utf-8' });
  console.log("2. 파일 읽기 완료");
  const discussions = JSON.parse(data);

  file.on('close', () => console.log("3. 파일 닫힘(끝)"))
  /* file.close(); */
  return discussions;
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

class Discuss {
  constructor({ title, author, bodyHTML }) {
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.title = title;
    this.url = "";
    this.author = author;
    this.answer = null;
    this.bodyHTML = bodyHTML;
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
    console.log("get 요청");
    /* const data = await initialData; */
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
    console.log("get 응답 전송 완료");
  },


  findById: async (req, res, next) => {
    /* const data = await initialData; */
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
    console.log("post 요청");
    const newData = new Discuss({ ...req.body });
    /* const data = await initialData; */
    const data = await getDiscussionsData();

    newData.id = data.length + 100;
    data.unshift(newData);

    const file = await open(jsonPath, 'r');
    const modified = await file.writeFile(JSON.stringify(data), { encoding: 'utf8' });
    file.on('close', () => console.log("쓰기 작업 완료"))
    file.close();
    res.status(201).json({ newDiscussionID: newData.id });
    console.log("post 응답 전송 완료"); 
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
