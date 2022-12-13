import React, { useEffect, useState } from "react";
import "../App.css";

const Paging = ({ fullList, page, setPage }) => {
  const [num, setNum] = useState([]);
  const [last, setLast] = useState("");

  const pageClick = (e) => {
    e.preventDefault();
    setPage(e.target.textContent);
  };

  const prevClick = (e) => {
    e.preventDefault();
    if (page === "1") {
      setPage("1");
    } else {
      setPage(page--);
    }
  };

  const nextClick = (e) => {
    e.preventDefault();
    if (page >= last) {
      setPage(last);
    } else {
      setPage(page++);
    }
  };

  useEffect(() => {
    let lastNum = Math.ceil(fullList.length / 10);
    setLast(lastNum);

    setNum(Array.from({ length: lastNum }, (v, i) => (i += 1)));
  }, [fullList.length]);

  return (
    <section className="paging__wrapper">
      <span className="previous__button" onClick={prevClick}>
        &lt;
      </span>
      <ul className="paging__container">
        {num.map((page, i) => {
          return (
            <li key={i} className="page" onClick={pageClick}>
              {page}
            </li>
          );
        })}
      </ul>
      <span className="next__button" onClick={nextClick}>
        &gt;
      </span>
    </section>
  );
};

export default Paging;
