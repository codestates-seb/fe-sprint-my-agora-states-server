import getServer from "../api/getServer";

const Agora = ({
  title,
  url,
  id,
  avatarUrl,
  answerUrl,
  author,
  createdAt,
  setAgora,
}) => {
  const isAnswer = answerUrl ? true : false;

  const handleDelete = () => {
    const isDelete = window.confirm("정말로 삭제 하시겠습니까?");
    if (!isDelete) return;
    const data = getServer(`http://localhost:4000/discussions/${id}`, "delete");
    data.then((data) => {
      console.log(data);
      setAgora((prev) => {
        const arr = [...prev];
        return arr.filter((item) => item.id !== data.id);
      });
    });
  };

  const handleUpdate = () => {};
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
          <span>
            {author} / {createdAt}
          </span>
          <button className="trash" onClick={handleDelete}>
            <i class="fa-solid fa-trash"></i>
          </button>
          <button className="update" onClick={handleUpdate}>
            <i class="fa-solid fa-pen"></i>
          </button>
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
