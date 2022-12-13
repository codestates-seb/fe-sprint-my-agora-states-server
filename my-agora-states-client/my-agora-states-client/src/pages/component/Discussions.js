import Discussion from './Discussion';

function Discussions({ list = [] }) {
  console.log(list);
  return list.map((el) => {
    return (
      <Discussion
        key={el.id}
        answer={el.answer}
        author={el.author}
        avatarUrl={el.avatarUrl}
        bodyHTML={el.bodyHTML}
        createdAt={el.createdAt}
        id={el.id}
        title={el.title}
        updatedAt={el.updatedAt}
        url={el.url}
      />
    );
  });
}

export default Discussions;
