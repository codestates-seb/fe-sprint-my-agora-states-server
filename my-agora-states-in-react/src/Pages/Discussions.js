import React from "react";
import SingleDiscussion from "../Components/SingleDiscussion";

const Discussions = (props) => {
	const SingleDiscussionRender = (item) => {
		return (
			<SingleDiscussion
				key={item.id}
				date={item.createdAt.toLocaleString("ko-KR")}
				title={item.title}
				url={item.url}
				author={item.author}
				imgSrc={item.avatarUrl}
			/>
		);
	};
	return (
		<section className="discussion__wrapper">
			<h2>
				Discussions <span id="allItemNum"></span>
			</h2>
			<ul className="discussions__container">
				{props.discussionData ? (
					props.discussionData.map((el) => SingleDiscussionRender(el))
				) : (
					<SingleDiscussion />
				)}
			</ul>
			<div className="pagination"></div>
		</section>
	);
};

export default Discussions;
