import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="left-bar">
        <Link to="/discussions/Add">
          <span>Have Question?</span>
        </Link>
        <Link to="/discussions/">
          <span>Discussions</span>
        </Link>
      </div>
      <div className="right-bar">
        <Link to="/discussions/search">
          <span>Search</span>
        </Link>
        <Link to="/discussions/notices">
          <span>Notice</span>
        </Link>
      </div>
    </section>
  );
};

export default Sidebar;
