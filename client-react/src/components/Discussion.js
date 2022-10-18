const Discussion = ({ data }) => {
  return (
    <li className="discussion__container">
      <div className="discussion__avatar--wrapper">
        <img
          className="discussion__avatar--image"
          src={data.avatarUrl}
          alt={"avatar of " + data.author}
        ></img>
      </div>
      <div className="discussion__content">
        <h2 className="discussion__title">
          <a href={data.url}>{data.title}</a>
        </h2>
        <div className="discussion__information">{`${data.author} / ${data.createdAt}`}</div>
      </div>
      <div className="discussion__answered">
        {data.answer === null ? "❓" : "✅"}
      </div>
    </li>
  );
};

export default Discussion;
