const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const request = require("supertest");
const { agoraStatesDiscussions } = require("../repository/discussions");
const { discussionsData } = require("../controller/discussion_controller");

describe("Bare Minimum Requirements - Server", () => {
  let server;

  describe("GET / 요청: Health check", () => {
    beforeAll(() => {
      server = require("../app").server;
    });

    afterAll(() => {
      server.close();
    });

    test("상태 코드 200과 함께 응답을 보냅니다.", () => {
      return request(server)
        .get("/")
        .then((res) => {
          const { status } = res;
          expect(status).toEqual(200);
          return;
        });
    });
  });

  describe("GET /discussions 요청", () => {
    beforeAll(() => {
      server = require("../app").server;
    });

    afterAll(() => {
      server.close();
    });

    test("상태 코드 200과 함께 응답을 보냅니다.", () => {
      return request(server)
        .get("/discussions")
        .then((res) => {
          const { status } = res;
          expect(status).toEqual(200);
          return;
        });
    });

    test("모든 discussions 목록을 응답으로 보냅니다.", () => {
      return request(server)
        .get("/discussions")
        .then((res) => {
          const { body } = res;
          expect(Array.isArray(body)).toEqual(true);
          agoraStatesDiscussions.forEach((discussion, index) => {
            expect(body[index].title).toEqual(discussion.title);
          });
          return;
        });
    });
  });

  describe("GET /discussions/:id 요청", () => {
    beforeAll(() => {
      server = require("../app").server;
    });

    afterAll(() => {
      server.close();
    });

    test("discussionsData에 해당 id와 일치하는 데이터가 존재하는 경우, 상태 코드 200과 함께 응답을 보냅니다.", () => {
      return request(server)
        .get("/discussions/2")
        .then((res) => {
          const { status } = res;
          expect(status).toEqual(200);
          return;
        });
    });

    test("discussionsData에 해당 id와 일치하는 데이터가 존재하지 않는 경우, 상태 코드 404와 함께 응답을 보냅니다.", () => {
      return request(server)
        .get("/discussions/1239018")
        .then((res) => {
          const { status } = res;
          expect(status).toEqual(404);
          return;
        });
    });

    test("응답의 body 속성으로 id, title, url, author, bodyHTML, avatarUrl이 있어야 합니다.", () => {
      return request(server)
        .get("/discussions/2")
        .then((res) => {
          const { body } = res;
          expect(body.id).toEqual(2);
          expect(body.title).toEqual("[notice] 질문 템플릿");
          expect(body.url).toBeTruthy();
          expect(body.author).toBeTruthy();
          expect(body.bodyHTML).toBeTruthy();
          expect(body.avatarUrl).toBeTruthy();
          return;
        });
    });

    test("discussionsData 중 해당 id와 일치하는 discussion을 응답으로 보냅니다.", () => {
      return request(server)
        .get("/discussions/2")
        .then((res) => {
          const { body } = res;
          expect(body).toEqual(agoraStatesDiscussions.find((d) => d.id === 2));
          return;
        });
    });
  });
});

describe("Custom Requirements - Server", () => {
  let server;

  describe("POST /discussions 요청", () => {
    beforeAll(() => {
      server = require("../app").server;
    });

    afterAll(() => {
      server.close();
    });

    test("글 작성에 성공한 경우 상태 코드 201과 함께 응답을 보냅니다.", () => {
      return request(server)
        .post("/discussions")
        .send({
          title: "실험용 제목",
          url: "",
          author: "모코코",
          bodyHTML:
            "POST 메서드에 body를 넣어서 보내는 테스트를 하려면 어떻게 해야 하죠.",
          avatarUrl: "",
        })
        .then((res) => {
          const { status } = res;
          expect(status).toEqual(201);
          return;
        });
    });
    test("title 혹은 bodyHTML이 누락된 경우 상태 코드 404와 함께 응답을 보냅니다.", () => {
      return request(server)
        .post("/discussions")
        .send({
          url: "",
          author: "mule",
          bodyHTML:
            "POST 메서드에 body를 넣어서 보내는 테스트를 하려면 어떻게 해야 하죠.",
          avatarUrl: "",
        })
        .then((res) => {
          const { status } = res;
          expect(status).toEqual(404);
          return;
        });
    });

    test("응답은 id와 createdAt을 속성으로 가져야 합니다.", () => {
      return request(server)
        .post("/discussions")
        .send({
          title: "제목",
          url: "",
          author: "mule",
          bodyHTML:
            "POST 메서드에 body를 넣어서 보내는 테스트를 하려면 어떻게 해야 하죠.",
          avatarUrl: "",
        })
        .then((res) => {
          const {
            discussionsData,
          } = require("../controller/discussion_controller");
          const body = discussionsData[0];
          expect(body.id).toBeTruthy();
          expect(body.createdAt).toBeTruthy();
          return;
        });
    });
  });
  describe("POST /discussions 요청 결과 저장", () => {
    beforeAll(() => {
      server = require("../app").server;
    });

    afterAll(() => {
      server.close();
    });

    test("discussionsDate 배열의 0번 인덱스에 새로운 글이 저장되어야 합니다.", () => {
      return request(server)
        .post("/discussions")
        .send({
          title: "제목",
          bodyHTML: "내용",
        })
        .then((res) => {
          expect(discussionsData[0].title).toEqual("제목");
          expect(discussionsData[0].bodyHTML).toEqual("내용");
          return;
        });
    });
  });

  describe("PUT /:id 요청", () => {
    beforeAll(() => {
      server = require("../app").server;
    });

    afterAll(() => {
      server.close();
    });
    test("해당 id에 해당하는 글이 있는 경우 201을 반환합니다.", () => {
      return request(server)
        .put("/discussions/45")
        .send({
          title: "제목",
          bodyHTML: "내용",
        })
        .then((res) => {
          const { status } = res;
          expect(status).toEqual(201);
          return;
        });
    });
    test("해당 id에 해당하는 글이 없는 경우 404를 반환합니다.", () => {
      return request(server)
        .put("/discussions/1000000")
        .send({
          title: "제목",
          bodyHTML: "내용",
        })
        .then((res) => {
          const { status } = res;
          expect(status).toEqual(404);
          return;
        });
    });
    test("title, bodyHTML 모두 누락된 경우 200을 반환합니다.", () => {
      return request(server)
        .put("/discussions/45")
        .send({
          dummy: "메롱",
        })
        .then((res) => {
          const { status } = res;
          expect(status).toEqual(200);
          return;
        });
    });
    test("해당 id에 해당하는 글의 title과 bodyHTML를 변경하여야 합니다.", () => {
      return request(server)
        .put("/discussions/45")
        .send({
          title: "제목",
          bodyHTML: "내용",
        })
        .then((req, res) => {
          const target = discussionsData.find(
            (obj) => obj.id.toString() === "45"
          );
          expect(target.title).toEqual("제목");
          expect(target.bodyHTML).toEqual("내용");
          return;
        });
    });
    test("변경된 title과 bodyHTML을 반환하여야 합니다.", () => {
      return request(server)
        .put("/discussions/45")
        .send({
          title: "제목",
          bodyHTML: "내용",
        })
        .then((req, res) => {
          const target = discussionsData.find(
            (obj) => obj.id.toString() === "45"
          );
          expect(target.title).toEqual("제목");
          expect(target.bodyHTML).toEqual("내용");
          return;
        });
    });
  });
});
