import React, { useEffect, useState } from 'react';
import Discussion from '../Discussion/Discussion';
import { getDiscussions, getDiscussions10 } from '../../api/DiscussionsData';

const Discussions = () => {
  const [discussions, setDiscussions] = useState([]);
  useEffect(() => {
    getDiscussions().then((data) => {
      setDiscussions(data);
    });

    // getDiscussions10().then((data) => setDiscussions(data));
  }, []);

  console.log(discussions); // 빈배열..?

  return (
    <div>
      <ul>
        {discussions.map((ele) => (
          <Discussion ele={ele} />
        ))}
      </ul>
    </div>
  );
};

export default Discussions;
