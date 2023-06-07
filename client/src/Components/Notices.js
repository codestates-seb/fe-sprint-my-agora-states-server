import React from "react";
import { Link } from "react-router-dom";
import Discussion from "./Discussion";

const Notices = ({ discussions }) => {
  console.log("discussions:", discussions)
  const filteredDiscussions = discussions.filter(
    (discussion) => discussion.id > 7
  );

  console.log("Filtered Discussions:", filteredDiscussions);

  return (
    <div>
      <ul className="discussions__container">
        {filteredDiscussions.map((discussion) => (
          <Link to={`/discussions/${discussion.id}`} key={discussion.id}>
            <Discussion discussion={discussion} />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Notices;
