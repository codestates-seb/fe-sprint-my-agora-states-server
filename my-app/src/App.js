import { useEffect, useState } from "react";
import getServer from "./api/getServer";
import Nav from "./component/Nav";
import Search from "./component/Search";
import Agora from "./component/Agora";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [agora, setAgora] = useState([]);
  const [search, setSearch] = useState("");

  const handleSeaarch = (e) => {
    e.preventDefault();
    setIsLoading(false);
  };

  useEffect(() => {
    const json = getServer(
      `http://localhost:4000/discussions?question=${search}`,
      "get"
    );
    json.then((data) => {
      setAgora(data);
      setIsLoading(true);
    });
  }, [isLoading]);

  return (
    <>
      <Nav />
      <Search
        search={search}
        setSearch={setSearch}
        handleSeaarch={handleSeaarch}
        setAgora={setAgora}
      />
      <main>
        <article class="discussion__wrapper">
          <ul class="discussions__container">
            {agora.length > 0 ? (
              agora.map((li) => (
                <Agora
                  key={li.id}
                  createdAt={li.createdAt}
                  author={li.author}
                  avatarUrl={li.avatarUrl}
                  url={li.url}
                  title={li.title}
                  answerUrl={li.answer}
                  id={li.id}
                  setAgora={setAgora}
                />
              ))
            ) : (
              <h1>결과를 찾을 수 없습니다!</h1>
            )}
          </ul>
        </article>
      </main>
    </>
  );
}

export default App;
