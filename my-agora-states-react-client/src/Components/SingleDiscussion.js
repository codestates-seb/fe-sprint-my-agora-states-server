import React from "react";

const SingleDiscussion = () => {
	return (
		<li className="discussion__container">
			<div className="discussion__avatar--wrapper">
				<img
					className="discussion__avatar--image"
					src="https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4"
					alt="avatar of kimploo"
				/>
			</div>
			<div className="discussion__content">
				<h3 className="discussion__title">
					<a href="https://github.com/codestates-seb/agora-states-fe/discussions/6">
						[notice] 좋은 질문하는 법
					</a>
				</h3>
				<div className="discussion__information">
					kimploo / 2022-04-22T14:08:33Z
				</div>
			</div>
			<div className="discussion__answered">
				<i className="material-icons checked">check_box</i>
			</div>
		</li>
	);
};

export default SingleDiscussion;
