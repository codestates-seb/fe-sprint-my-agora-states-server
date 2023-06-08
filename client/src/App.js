import { useEffect, useState } from "react";
import Discussion from "./Discussion";

function App() {
  const [discussion, setDiscussion] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const nowPage = [];
  for (
    let i = (page - 1) * 10;
    i < page * 10 && i < discussion.length;
    i += 1
  ) {
    nowPage.push(discussion[i]);
  }

  const totalPage = Math.ceil(discussion.length / 10);
  let pageGroup = Math.ceil(page / 10);
  let last = pageGroup * 10;
  let first = last - (10 - 1) <= 0 ? 1 : last - (10 - 1);
  if (last > totalPage) last = totalPage;
  let next = last + 1;
  let prev = first - 1;

  let fragmentPage = [];
  for (let i = first; i <= last; i++) {
    fragmentPage.push(i);
  }

  useEffect(() => {
    const load = async () => {
      await fetch(`http://localhost:4000/discussions/`, {
        method: "GET",
        cache: "no-store",
      })
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          setDiscussion(json);
        });
    };
    load();
  }, []);

  return (
    <main>
      <h1 className="margin_h_20">Agora States</h1>
      <section className="form__container padding_20 margin_h_20">
        <form action="" method="get" id="form">
          <input
            type="text"
            name="title"
            id="title"
            className="padding_10"
            placeholder="제목"
            required
          />
          <textarea
            id="story"
            className="padding_10 margin_h_10"
            name="story"
            placeholder="질문을 작성하세요"
            required
          ></textarea>
          <p className="discussion__error margin_bottom_10 hide">
            제목 혹은 질문이 입력되지 않았습니다.
          </p>
          <input type="submit" id="submit" value="submit" />
        </form>
      </section>
      <section className="discussion__wrapper">
        <ul className="discussions__container">
          {!loading ? (
            nowPage.map((item) => <Discussion obj={item} key={item.id} />)
          ) : (
            <p>Loading</p>
          )}
        </ul>
      </section>
      {discussion.length <= 10 ? null : (
        <footer className="pagenation margin_h_20">
          {currentPage != 1 ? null : (
            <span
              onClick={() => {
                setCurrentPage(1);
              }}
            >
              &lt;&lt;
            </span>
          )}
          {currentPage != 1 ? null : (
            <span
              onClick={() => {
                setCurrentPage(currentPage - 1);
              }}
            >
              &lt;
            </span>
          )}
          {fragmentPage.map((i) => {
            return (
              <span
                onClick={() => {
                  setPage(i);
                }}
              >
                {i}
              </span>
            );
          })}
        </footer>
      )}
    </main>
  );
}

export default App;
