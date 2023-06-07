import { useEffect, useState } from "react";
import Discussion from "./Discussion";

function App() {
  const [discussion, setDiscussion] = useState([]);
  const [loading, setLoading] = useState(false);

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
            discussion.map((item) => <Discussion obj={item} key={item.id} />)
          ) : (
            <p>Loading</p>
          )}
        </ul>
      </section>
      <footer className="pagenation margin_h_20"></footer>
    </main>
  );
}

export default App;
