import Discussion from "./Discussion";

const Discussions = ({discussions, deleteDisucssion}) => {
    return(
        <section className="discussion__wrapper">
             <ul className="discussions__container">
                {discussions.map((discussion)=>{
                    return <Discussion key={discussion.id} discussion={discussion} deleteDiscussion={deleteDisucssion} />
                })}
             </ul>
        </section>
    );
};
export default Discussions;