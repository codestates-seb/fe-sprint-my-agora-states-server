import Button from './Button';
import './InputArea.css'

const childInputs = [
  { title: "Enter your name", id: "name", placeholder: "유저명을 입력하세요.", key: 1 },
  { title: "Enter your title", id: "title", placeholder: "제목을 입력하세요.", key: 2 },
  { title: "Your question", id: "story", placeholder: "질문을 입력하세요.", type: "textarea", key: 3 }
]

const InputArea = ({ title, type, id, placeholder }) => {

  return (
    <>
      <label htmlFor={id}>{title}</label>
      {type === "textarea"
        ? <textarea type={type} name="discussion" id={id} placeholder={placeholder} required />
        : <input type={type} name="discussion" id={id} placeholder={placeholder} required />}
    </>
  );
}

const Form = () => {

  return (
    <form action="" method="post" className="form" /* onSubmit={} */>
      <div className="form__input--wrapper">
        {childInputs.map((opt) => <InputArea {...opt} />)}
        <Button type="submit" title="submit" />
      </div>
    </form>
  );
}

export default Form;