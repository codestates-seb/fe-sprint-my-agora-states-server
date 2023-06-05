import { useState, memo } from "react";
import Modal from "./Modal";

const Search = ({ search, setSearch, handleSeaarch, setAgora }) => {
  const [modal, setModal] = useState(false);

  const onChange = (e) => setSearch(e.target.value);
  const handleModal = () => {
    setModal(true);
  };
  return (
    <>
      <div class="search__div">
        <button class="modalBtn" onClick={handleModal}>
          질문생성
        </button>
        <form class="search__box" onSubmit={handleSeaarch}>
          <input
            type="text"
            name="search"
            id="search"
            required
            placeholder="Search title or name"
            value={search}
            onChange={onChange}
          />
          <button>
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </form>
      </div>
      {modal ? <Modal setModal={setModal} setAgora={setAgora} /> : null}
    </>
  );
};

export default memo(Search);
