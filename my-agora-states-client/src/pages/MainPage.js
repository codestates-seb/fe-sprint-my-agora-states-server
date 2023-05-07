import React from "react";
import DiscussionList from "../components/DiscussionList";
function mainpage({ discussion }) {
  return <DiscussionList data={discussion} />;
}

export default mainpage;
