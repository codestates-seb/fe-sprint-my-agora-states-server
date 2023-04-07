import Discussion from './Discussion';

function Discussions({ discussions, onDelete, onUpdate }) {
  return (
    <ul>
      {discussions.map((discussion) => (
        <Discussion
          key={discussion.id}
          discussion={discussion}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}

export default Discussions;
