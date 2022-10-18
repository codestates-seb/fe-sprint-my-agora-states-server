import React, { useState } from "react";
import SingleDiscussion from "../Components/SingleDiscussion";

const Discussions = () => {
	const SingleDiscussionRender = (item) => {
		return <SingleDiscussion key={item.id} />;
	};
	return (
		<section className="discussion__wrapper">
			<h2>
				Discussions <span id="allItemNum"></span>
			</h2>
			<ul className="discussions__container">
				{/* <!-- 개별 질문 목록 --> */}
				<SingleDiscussion />
			</ul>
			<div className="pagination"></div>
		</section>
	);
};

export default Discussions;
