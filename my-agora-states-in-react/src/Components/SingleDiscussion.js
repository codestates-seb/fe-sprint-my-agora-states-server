import React from "react";

const SingleDiscussion = (props) => {
	return (
		<li className="discussion__container">
			<div className="discussion__avatar--wrapper">
				<img
					className="discussion__avatar--image"
					src={props.imgSrc}
					alt={`avatar of ${props.author}`}
				/>
			</div>
			<div className="discussion__content">
				<h3 className="discussion__title">
					<a href={props.url}>{props.title}</a>
				</h3>
				<div className="discussion__information">
					{`${props.author} / ${props.date}`}
				</div>
			</div>
			<div className="discussion__answered">
				<i className="material-icons checked">check_box</i>
			</div>
		</li>
	);
};

export default SingleDiscussion;
