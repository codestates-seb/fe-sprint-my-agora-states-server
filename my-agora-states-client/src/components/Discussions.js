import Discussion from "./Discussion";

const Discussions = ({discussions}) => {
  return (
    <section class="discussion__wrapper">
      <ul class="discussions__container">
        { discussions.map((discussion) => {
          return <Discussion key={discussion.id} discussion={discussion}/>
        })
        }
      </ul>
    </section>
  );
};

export default Discussions;