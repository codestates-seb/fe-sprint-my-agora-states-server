import "../style.css";
// Components
import { useEffect, useState } from "react";
import Header from "../Components/Header";
import Form from "../Components/Form";
import Discussions from "./Discussions";
import { getDiscussionData } from "../api/DiscussionDataApi";

const Main = () => {
	const [discussionData, setDiscussionData] = useState([]);
	useEffect(() => {
		getDiscussionData().then((result) => {
			setDiscussionData(result);
		});
	}, [discussionData]);
	const handleSubmitClick = (newSingleData) => {
		setDiscussionData([newSingleData, ...discussionData]);
	};
	return (
		<main>
			<Header />
			<Form handleSubmitClick={handleSubmitClick} />
			<Discussions discussionData={discussionData} />
		</main>
	);
};

export default Main;
