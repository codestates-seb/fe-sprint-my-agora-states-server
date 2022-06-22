import React from 'react';
import './TweetList.css';
import Tweet from "./Tweet";

function TweetList( { discussions, deleteDiscussion } ) {
    

  return (
    <section className="discussion__wrapper">
        <ul className="discussions__container">
            {discussions.map((discussion) => {
            return <Tweet key={discussion.id} discussion={discussion} deleteDiscussion={deleteDiscussion}/>
            })}
        </ul>
        {/* <div class="pagination">
            <div class="buttonlist"></div>
        </div> */}
    </section>
    )
}

export default TweetList;