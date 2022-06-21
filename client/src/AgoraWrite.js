import { useRef } from 'react';
import './AgoraWrite.css';
const AgoraWrite = ({ index, setData }) => {
  const title = useRef();
  const author = useRef();
  const story = useRef();
  const date = new Date();
  const handleSubmit = () => {
    if (
      title.current.value === '' ||
      story.current.value === '' ||
      author.current.value === ''
    ) {
      alert('빈칸을 꽉 채워주세요!!');
      return;
    }
    const body = {
      id: index,
      title: title.current.value,
      author: author.currentvalue,
      createdAt: date,
      story: story.current.value,
      avatarUrl:
        'https://lh5.googleusercontent.com/K9IVN9rEwdedEb-HiPQhPb0YZClYBYOijyt9Gj_fZH9n1JkhvEsS0x9Agt9Bq41owIGpmcpSXLa6ZCHmmJRn=w1920-h937',
      answer: null,
    };
    fetch('http://localhost:3001/discussions', {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  };

  return (
    <section className='AgoraWrite'>
      <form method='get' className='form'>
        <div className='form__input--wrapper'>
          <div className='form__input--name'>
            <label>
              name
              <input type='text' name='name' id='name' ref={author} required />
            </label>
          </div>
          <div className='form__input--title'>
            <label for='name'>title </label>
            <input type='text' name='title' id='title' ref={title} required />
          </div>
          <div className='form__textbox'>
            <label for='story'>question </label>
            <textarea
              id='story'
              name='story'
              placeholder='질문을 작성하세요'
              ref={story}
              required
            ></textarea>
          </div>
        </div>
        <div className='form__submit'>
          <input type='button' value='submit' onClick={handleSubmit} />
        </div>
      </form>
    </section>
  );
};
export default AgoraWrite;
