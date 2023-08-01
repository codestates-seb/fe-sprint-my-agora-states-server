import { useState } from 'react';

const DataList = ({ data, onDelete }) => {
  const [toggle, setToggle] = useState(false);

  const openContent = () => {
    setToggle(!toggle);
  };

  const deleteContent = (id) => {
    console.log(id)
    onDelete(id);
  };

  const getDate = (rawDate) => {
    let date = new Date(rawDate);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    date = `${year}-${month}-${day} ${hours}:${minutes}`;
    return date;
  };

  return (
    <li>
      <div className={`info ${toggle ? `active` : ``}`} onClick={openContent}>
        <div className="info-left">
          <h4 className="title">{data.title}</h4>
          <p>{data.author}</p>
          <p>{getDate(data.createdAt)}</p>
        </div>
        <div className="info-right">
          <span className={`status ${data.answer ? `answered` : `wating`}`}>
            {data.answer ? `답변 완료` : `답변 대기`}
          </span>
        </div>
      </div>
      {toggle && (
        <>
          <div className="content-box">
            <div className="content" dangerouslySetInnerHTML={{ __html: data.bodyHTML }}></div>
            <button className="delete" type="button" onClick={() => deleteContent(data.id)}>
              삭제
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default DataList;
