import React, { useState } from "react";

const Form = () => {
	const [username, setUsername] = useState("");
	const [userTitle, setUserTitle] = useState("");
	const [msg, setMsg] = useState("");
	const handleChangeName = (event) => {
		setUsername(event.target.value);
	};
	const handleChangeTitle = (event) => {
		setUserTitle(event.target.value);
	};
	const handleChangeMsg = (event) => {
		setMsg(event.target.value);
	};
	const handleClickSubmit = (event) => {
		//제출 후 처리
	};
	return (
		<section className="form__container">
			<h2>New discussions</h2>
			<form action="" method="get" className="form">
				<div className="form__input--wrapper">
					<div className="form__input--name">
						<label htmlFor="name">Enter your name: </label>
						<input
							type="text"
							name="name"
							id="name"
							value={username}
							onChange={handleChangeName}
							required
						/>
					</div>
					<div className="form__input--title">
						<label htmlFor="name">Enter your title: </label>
						<input
							type="text"
							name="title"
							id="title"
							value={userTitle}
							onChange={handleChangeTitle}
							required
						/>
					</div>
					<div className="form__textbox">
						<label htmlFor="story">Your question: </label>
						<textarea
							id="story"
							name="story"
							placeholder="질문을 작성하세요"
							value={msg}
							onChange={handleChangeMsg}
							required
						></textarea>
					</div>
				</div>
				<div className="form__submit">
					<button onClick={handleClickSubmit}>SUBMIT</button>
				</div>
			</form>
		</section>
	);
};

export default Form;
