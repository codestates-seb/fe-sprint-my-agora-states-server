import { useEffect, useState } from "react";
import getServer from "./getServer";
import Nav from "./component/Nav";
import Search from "./component/Search";
import Agora from "./component/Agora";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [agora, setAgora] = useState([]);
  const [search, setSearch] = useState("");

  const handleSeaarch = (e) => {
    e.preventDefault();
    console.log("click");
  };

  useEffect(() => {
    const json = getServer("http://localhost:4000/discussions");
    json.then((data) => {
      setAgora(data);
      setIsLoading(false);
    });
  }, [isLoading]);

  return (
    <>
      <Nav />
      <Search
        search={search}
        setSearch={setSearch}
        handleSeaarch={handleSeaarch}
      />
      <main>
        <article class="discussion__wrapper">
          {agora && (
            <ul class="discussions__container">
              {agora.map((li, index) => (
                <Agora
                  key={li.id}
                  createdAt={li.createdAt}
                  author={li.author}
                  avatarUrl={li.avatarUrl}
                  url={li.url}
                  title={li.title}
                  answerUrl={li.answer}
                />
              ))}
            </ul>
          )}
        </article>
      </main>
    </>
  );
}

export default App;
