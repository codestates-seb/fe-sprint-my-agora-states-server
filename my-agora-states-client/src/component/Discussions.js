import { Discussion } from "./Discussion"

const Discussions = ({discussions}) => {

  return <section className ="discussion__wrapper">
    <ul className ="discussions__container">
      {discussions.map(discussion => {
        return <Discussion discussion = {discussion} key={discussion.id} />;
      })}
    </ul>
  </section>
}
export default Discussions;