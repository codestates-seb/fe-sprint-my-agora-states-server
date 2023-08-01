import { useState } from "react";

const DataForm = ({ onCreate }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] =useState('');

    const titleChangeHandeler = (event) => {
        setTitle(event.target.value)
    }

    const contentChangeHandeler = (event) => {
        setContent(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const body = {
            title,
            content
        }
        onCreate(body)
    }

  return (
    <form method="post" className="form">
      <input className="title-input" name="title" type="text" placeholder="제목" onChange={titleChangeHandeler} />
      <textarea
        className="content-textarea"
        name="content"
        id=""
        cols="20"
        rows="5"
        placeholder="질문 내용" 
        onChange={contentChangeHandeler}
      ></textarea>
      <button className="submit" onClick={submitHandler}>등록</button>
    </form>
  );
};

export default DataForm;
