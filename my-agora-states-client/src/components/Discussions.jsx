import Discussion from './Discussion';

function Discussions({ discussions, onDelete }) {
  return (
    <ul>
      {discussions.map((discussion) => (
        <Discussion key={discussion.id} discussion={discussion} onDelete={onDelete} />
      ))}
    </ul>
  );
}

export default Discussions;
