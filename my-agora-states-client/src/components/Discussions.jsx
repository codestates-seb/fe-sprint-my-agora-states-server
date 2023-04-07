import Discussion from './Discussion';

function Discussions({ discussions }) {
  return (
    <ul>
      {discussions.map((discussion) => (
        <Discussion key={discussion.id} discussion={discussion} />
      ))}
    </ul>
  );
}

export default Discussions;
