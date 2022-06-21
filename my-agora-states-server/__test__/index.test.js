const { TextEncoder, TextDecoder } = require("util");
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const request = require("supertest");
const { agoraStatesDiscussions } = require("../repository/discussions");

describe("Bare Minimum Requirements - Server", () => {
  let server;

  describe("GET / 요청: Health check", () => {
    beforeAll(() => {
      server = require("../app").server;
    });

    afterAll(() => {
      server.close();
    });

    test("상태 코드 200을 응답합니다.", () => {
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

    test("상태 코드 200을 응답합니다.", () => {
      return request(server)
        .get("/discussions")
        .then((res) => {
          const { status } = res;
          expect(status).toEqual(200);
          return;
        });
    });

    test("모든 discussions 목록을 응답합니다.", () => {
      return request(server)
        .get("/discussions")
        .then((res) => {
          const { body } = res;
          expect(Array.isArray(body)).toEqual(true);
          agoraStatesDiscussions.forEach((discussion, index) => {
            expect(body[index].title).toEqual(discussion.title)
          })
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

    test("해당 id가 존재하는 경우, 상태 코드 200를 응답합니다.", () => {
      return request(server)
        .get("/discussions/2")
        .then((res) => {
          const { status } = res;
          expect(status).toEqual(200);
          return;
        });
    });

    test("해당 id가 존재하지 않는경우, 상태 코드 404를 응답합니다.", () => {
      return request(server)
        .get("/discussions/1239018")
        .then((res) => {
          const { status } = res;
          expect(status).toEqual(404);
          return;
        });
    });

    test("응답의 body 속성으로 id, title, url, author, bodyHTML, avatarUrl가 있어야 합니다.", () => {
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

    test("해당 id를 가진 discussion을 응답합니다.", () => {
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

// Advanced Challenge 테스트가 필요하면 주석을 해제합니다.
describe('Advanced Challenge - Server', () => {
  let server;
  describe('GET /discussions 요청 - Pagination', () => {
    beforeAll(() => {
      server = require('../app').server;
    });

    afterAll(() => {
      server.close();
    });

    test('쿼리 파라미터 limit 값에 따라 한 번에 볼 수 있는 discussion 개수를 정할 수 있어야 합니다.', () => {
      return request(server)
        .get('/discussions?limit=5')
        .then((res) => {
          const { body } = res;
          expect(body.length).toEqual(5);
          return request(server).get('/discussions?limit=9');
        })
        .then((res) => {
          const { body } = res;
          expect(body.length).toEqual(9);
          return;
        });
    });
    test('쿼리 파라미터 limit가 없는 요청은 discussions 목록 10개를 응답합니다.', () => {
      return request(server)
        .get('/discussions?page=1')
        .then((res) => {
          const { body } = res;
          expect(body.length).toEqual(10);
          return;
        });
    });
    test('쿼리 파라미터 page가 없는 요청은 쿼리 파라미터 limit값 만큼의 discussion 목록을 응답합니다.', () => {
      return request(server)
        .get('/discussions?limit=5')
        .then((res) => {
          const { body } = res;
          expect(body.length).toEqual(5);
          return request(server).get('/discussions?limit=9');
        })
        .then((res) => {
          const { body } = res;
          expect(body.length).toEqual(9);
          return;
        });
    });
    test('limit이 3인 경우, 쿼리 파라미터 page 값에 따라 보고 싶은 페이지를 정할 수 있어야 합니다.', () => {
      return request(server)
        .get('/discussions?limit=3&page=1')
        .then((res) => {
          const { body } = res;
          expect(body.length).toEqual(3);
          return request(server).get('/discussions?limit=3&page=3');
        })
        .then((res) => {
          const { body } = res;
          expect(body.length).toEqual(3);
          return;
        });
    });
    test('잘못된 쿼리 파라미터 값을 요청받은 경우, 상태 코드 400을 응답합니다.', () => {
      // https://stackoverflow.com/a/3050561
      return request(server)
        .get('/discussions?limit=codestates')
        .then((res) => {
          expect(res.status).toEqual(400);
          return;
        });
    });
    test('범위를 벗어난 파라미터 값을 요청받은 경우, 빈 배열을 응답해야 합니다.', () => {
      // https://api.gov.au/standards/national_api_standards/pagination.html#query-parameters
      return request(server)
        .get('/discussions?limit=9999&page=2')
        .then((res) => {
          expect(res.status).toEqual(200);
          expect(res.body).toEqual();
          return;
        });
    });
    test('범위를 벗어난 파라미터 값을 요청받은 경우, 상태 코드 200을 응답합니다.', () => {
      // https://api.gov.au/standards/national_api_standards/pagination.html#query-parameters
      return request(server)
        .get('/discussions?limit=9999&page=2')
        .then((res) => {
          expect(res.status).toEqual(200);
          return;
        });
    });
  });
});
