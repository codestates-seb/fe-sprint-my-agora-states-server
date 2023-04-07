export default function QuestionList({ agoraStatesData }) {
  const generateDate = (value) => {
    const TIME = new Date(value).toLocaleTimeString();

    const YEAR = new Date(value).getFullYear();
    const MONTH = new Date(value).getMonth();
    const DATE = new Date(value).getDate();

    return `${YEAR}년 ${MONTH + 1}월 ${DATE}일 ${TIME.slice(0, -3)}`;
  };
  return (
    <div>
      {agoraStatesData.map((data) => (
        <div key={data.id}>
          <h1>
            <a href={data.url}>{data.title}</a>
          </h1>
          <img src={data.avatarUrl} />
          <div>{data.answer ? '답변완료' : '미답변'}</div>
          <time>{generateDate(data.createdAt)}</time>
        </div>
      ))}
    </div>
  );
}
