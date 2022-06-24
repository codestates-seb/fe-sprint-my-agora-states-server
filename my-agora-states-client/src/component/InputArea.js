import { useEffect, useState } from 'react';
import Button from './Button';
import './InputArea.css'

const childInputs = [
  { title: "Enter your name", id: "author", placeholder: "유저명을 입력하세요.", key: 1 },
  { title: "Enter your title", id: "title", placeholder: "제목을 입력하세요.", key: 2 },
  { title: "Your question", id: "bodyHTML", placeholder: "질문을 입력하세요.", type: "textarea", key: 3 }
]

const InputArea = ({ title, type, id, placeholder, value, onChange }) => {

  return (
    <>
      <label htmlFor={id}>{title}</label>
      {type === "textarea"
        ? <textarea type={type} name="discussion" id={id} value={value} placeholder={placeholder} onChange={onChange} required />
        : <input type={type} name="discussion" id={id} value={value} placeholder={placeholder} onChange={onChange} required />}
    </>
  );
}

const Form = ({ newItem, setNewItem, setReRender }) => {
  /* const [newItem, setNewItem] = useState({ name: "", title: "", bodyHTML: "" }); */
  const [fetching, setFetching] = useState(false);

  const onInputChange = (e, prop) => {
    setNewItem(prev => ({ ...prev, [prop]: e.target.value }));
  }
  const submitDiscussion = (e) => {
    e.preventDefault();  // FIXME: 꼭 써야 하나?
    setReRender("newItem");
  }

/*   useEffect(() => {
    if (!fetching) return;

    const option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(newItem)
    }
    console.log(newItem);
    fetch("http://localhost:3003/discussions", option)
      .then((res) => res.json())
      .then(({ newDiscussionID }) => {
        if (newDiscussionID) {
          setNewItem({ name: "", title: "", bodyHTML: "" });
          setFetching(false);
          onSubmitItem(true);
        }
      })
  }, [fetching]); */

  return (
    <form className="form" onSubmit={submitDiscussion}>
      <div className="form__input--wrapper">
        {childInputs.map((opt) => <InputArea {...opt} value={newItem[opt.id]} onChange={(e) => onInputChange(e, opt.id)} />)}
        <Button type="submit" title="submit" />
      </div>
    </form>
  );
}

export default Form;