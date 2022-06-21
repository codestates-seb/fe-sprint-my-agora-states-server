import './Discussion.css';

/* 날짜시간 변환 함수 */
function dateConverter(time) {
  if (typeof time === "string") {
    time = new Date(time);
  };
  return new Intl.DateTimeFormat("ko-KR", { dateStyle: "long", timeStyle: "short" }).format(time);
}


const Discussion = (props) => {
  const { author, title, answer} = props;

  return (
    <li className="discussion__container">
      <div className="discussion__avatar--wrapper">
        <img src={answer?.avatarUrl || ""} alt={`avatar of ${author}`} />
      </div>
      <div className="discussion__content">
        <h2 className="discussion__title">
          <a href={answer?.url}>{title}</a>
        </h2>
        <div className="discussion__information">{author} / {dateConverter(answer?.createdAt)}</div>
      </div>
      <div className="discussion__answered">
        <img className={answer ? "answered" : "notAnswered"} />
      </div>
    </li>
  );
}


const DiscussSect = ({ data, toolComp }) => {

  return (
    <ul className="discussions__container">
      <div className="tools">
        {toolComp}
      </div>
      {data.map((props) => <Discussion {...props} key={props.id} />)}
    </ul>
  );
}

export default DiscussSect;

/* tool
<label htmlFor="filtering">답변 완료
        <select name="filtering" id="filtering">
          <option value="all">전체</option>
          <option value="notAnswered">미완료</option>
          <option value="answered">완료</option>
        </select>
      </label>
      <label htmlFor="selection">페이지 당
        <select name="perArticles" id="selection">
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        개</label>
         */