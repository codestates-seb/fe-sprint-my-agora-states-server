import Discussion from "./discussion";

const Discussions = () => {
  let discussions;
  fetch("http://localhost:4000/discussions", {
    method: "GET",
    mode: "cors",
    origin: "http://localhost:3000",
  })
    .then((res) => res.json)
    .then((data) => {
      discussions = data;
    });
  return (
    <main>
      <section className="discussion__wrapper">
        <ul className="discussions__container">
          {<Discussion />}
          {/*discussions.map((discussion) => {
            <Discussion discussion={discussion} />;
          })*/}
        </ul>
      </section>
    </main>
  );
};

export default Discussions;
