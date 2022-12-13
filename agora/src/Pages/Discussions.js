import MyDiscussion from "../component/MyDiscussion"


const Discussions = (props) => {
    const MyDiscussionRender = (item) => {
    return (
    <MyDiscussion 
        key={item.id}
        date={item.createAt.toLocalString("ko-KR")}
        title={item.title}
        url={item.url}
        author={item.author}
        imgSrc={item.avatarUrl}
    />
    )}


    return (
		<section className="discussion__wrapper">
			<h2>
				Discussions <span id="allItemNum"></span>
			</h2>
			<ul className="discussions__container">
				{props.discussionData ? (
					props.discussionData.map((el) => MyDiscussionRender(el))
				) : (
					<MyDiscussion />
				)}
			</ul>
			<div className="pagination"></div>
		</section>
    )
}

export default Discussions;