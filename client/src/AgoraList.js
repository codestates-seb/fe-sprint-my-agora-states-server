import './AgoraList.css';

const AgoraList = ({ data, setData }) => {
  return (
    <>
      <section className='AgoraList'>
        <ul className='discussions__container'>
          {data.map((el) => {
            const handleDelete = () => {
              console.log(el.id);
              fetch(`http://localhost:3001/discussions/${el.id}`, {
                method: 'DELETE',
                body: '',
                redirect: 'follow',
              })
                .then((res) => res.json())
                .then((data) => {
                  alert('테스트중');
                  console.log(data);
                  setData(data);
                });
            };
            const handleEdit = () => {
              // fetch(`http://localhost:3001/discussions/${el.id}`, {
              //   method: 'PUT',
              //   body: '',
              //   redirect: 'follow',
              // })
              //   .then((res) => res.json())
              //   .then((data) => {
              //     alert('테스트중');
              //     console.log(data);
              //     setData(data);
              //   });
            };
            return (
              <li className='discussion__container' key={el.id}>
                <div className='editNdelete'>
                  <span onClick={handleEdit}>수정</span>{' '}
                  <span onClick={handleDelete}>삭제</span>
                </div>

                <div className='discussion__avatar--wrapper'>
                  <img
                    className='discussion__avatar--image'
                    src={el.avatarUrl}
                    alt={'avatar of' + el.author}
                  />
                </div>
                <div className='discussion__content'>
                  <h2 className='discussion__title'>
                    <a href={el.url}>{el.title}</a>
                  </h2>
                  <div className='discussion__information'>
                    <span className='userInfo'>
                      {el.author} / {Date(el.createdAt).split(' ')[4]}
                    </span>
                    <span className='isAnswer'>
                      {el.answer !== null ? '  answered' : '  unanswered'}
                    </span>
                    <input
                      className='discussionId'
                      type='hidden'
                      value={el.id}
                    />
                  </div>
                </div>
                <div className='discussion__answered material-icons'>
                  {el.answer !== null ? '✔' : '❌'}
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <section className='discussion__wrapper'>
        <ul className='discussions__container'></ul>
      </section>
    </>
  );
};
export default AgoraList;
