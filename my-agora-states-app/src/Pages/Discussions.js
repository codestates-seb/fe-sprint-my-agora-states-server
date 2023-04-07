import React from "react";
import Discussion from "../Discussion";

const Discussions = ({ data }) => {
  console.log(data);
  return (
    <div>
      <ul className="discussions">
        {data.map((item) => {
          return <Discussion discussion={item} />;
        })}
      </ul>
    </div>
  );
};

export default Discussions;
