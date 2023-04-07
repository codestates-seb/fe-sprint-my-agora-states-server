import axios from 'axios';

const Contents = ({ discussions, handleDeleteDiscussion }) => {
  const onDeletePost = async (postId) => {
    try {
      await axios.delete(`http://localhost:4000/discussions/${postId}`);
      handleDeleteDiscussion(postId);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = (postId) => {
    const confirmed = window.confirm('정말로 삭제하시겠습니까?');
    if (confirmed) {
      onDeletePost(postId);
    }
  };

  return (
    <div id="feeds">
      <section className="feeds__contents">
        <ul className="discussions__container">
          {discussions.map((discussion) => {
            return (
              <li key={discussion.id} className="discussion__container">
                <div className="discussion__avatar--wrapper">
                  <img
                    className="discussion__avatar--image"
                    src={discussion.avatarUrl}
                    alt="avatar of kimploo"
                  />
                </div>
                <div className="discussion__content">
                  <h2 className="discussion__title">
                    <a>{discussion.title}</a>
                  </h2>
                  <div className="discussion__information">
                    {discussion.author} / {discussion.createdAt}
                  </div>
                </div>
                <div className="discussion__btn--wrapper">
                  <img
                    className="discussion__deleteBtn"
                    onClick={() => handleDelete(discussion.id)}
                  />
                  <img className="discussion__answerBtn" />
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <nav id="nav">
        <button className="nav__previousPage">
          <img src="./previous_icon.png" />
        </button>
        <ul className="nav__btns"></ul>
        <button className="nav__nextPage">
          <img src="./next_icon.png" />
        </button>
      </nav>
      <section className="feedDetail hidden">
        <div className="feedDetail__header">
          <button className="feedDetail__previousBtn">
            <img src="./previous_icon.png" />
          </button>
          <button className="feedDetail__bellBtn">
            <img src="./bell_icon.png" />
          </button>
        </div>
        <div className="feedDetail__content--wrapper">
          <div className="feedDetail__user">
            <img className="userImg" />
            <div className="userInfo">
              <h5 className="userName"></h5>
              <p className="uploadDate"></p>
            </div>
          </div>
          <div className="feedDetail__content">
            <div className="feedDetail__question">
              <div className="question__title--wrapper">
                <h6>Q.</h6>
                <h6 className="question__title"></h6>
              </div>
              <div className="question__content"></div>
            </div>
            <ul className="feedDetail__answer"></ul>
          </div>
          <nav className="feedDetail__reaction"></nav>
        </div>
      </section>
    </div>
  );
};

export default Contents;
