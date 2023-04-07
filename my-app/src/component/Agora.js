const Agora = ({ title, url, id, avatarUrl, answerUrl, author, createdAt }) => {
  const isAnswer = answerUrl ? true : false;
  return (
    <li className="discussion__container">
      <div className="discussion__avatar--wrapper">
        <img src={avatarUrl} alt={id} className="discussion__avatar--image" />
      </div>
      <div className="discussion__content">
        <h2 className="discussion__title">
          <a href={url} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h2>
        <div className="discussion__information">
          {author} / {createdAt}
        </div>
      </div>
      <div className="discussion__answered">
        {isAnswer ? (
          <a href={answerUrl.url} target="_blank" rel="noreferrer">
            <i className="fa-solid fa-heart fa-2xl"></i>
          </a>
        ) : (
          <i className="fa-solid fa-face-sad-tear fa-2xl" />
        )}
      </div>
    </li>
  );
};

export default Agora;
