import DiscussionItem from "./discussionItme";

const DiscussionList = ({discussion})=>{

console.log(discussion)
  
    return (
        <section className="discussion__wrapper">
        <ul className="discussions__container">

          {discussion.map((data) => {
            return (
              <DiscussionItem data={data} key={data.id}/>
            )
          })}
        </ul>
      </section>
    )
}

export default DiscussionList;