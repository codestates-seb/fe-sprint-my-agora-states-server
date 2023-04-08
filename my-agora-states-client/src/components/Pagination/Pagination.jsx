import React from "react";
import styles from "./Pagination.module.css";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";

const Pagination = ({ page, total, updatePage }) => {
  const handlePrev = () => {
    const current = page - 1 < 0 ? 0 : page - 1;
    updatePage(current);
  };
  const handleNext = () => {
    console.log(total);
    const current = page >= total - 1 ? total - 1 : page + 1;
    updatePage(current);
  };

  return (
    <div className={styles.wrapper}>
      <button onClick={handlePrev} className={styles.button}>
        <FiArrowLeftCircle />
      </button>
      {`${page + 1}/ ${total}`}
      <button onClick={handleNext} className={styles.button}>
        <FiArrowRightCircle />
      </button>
    </div>
  );
};

export default Pagination;
