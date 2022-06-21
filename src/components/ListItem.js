const ListItem = ({ imgSrc, title, url, author, time }) => {
  return (
    <li class="discussion__container">
      <div class="discussion__avatar--wrapper">
        <img
          class="discussion__avatar--image"
          src={imgSrc}
          alt="avatar of kimploo"
        />
      </div>
      <div class="discussion__content">
        <h2 class="discussion__title">
          <a href={url}>{title}</a>
        </h2>
        <div class="discussion__information">{`${author} / ${time}`}</div>
      </div>
      <div class="discussion__answered">
        <button>✔️</button>
      </div>
    </li>
  );
};

export default ListItem;
