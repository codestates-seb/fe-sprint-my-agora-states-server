import React, { useState, useEffect } from "react";
import Discussion from "./Discussion";

const Discussions = ({ discussionsData, setDiscussionsData, newQuestion }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      let response = await fetch("http://localhost:4000/discussions");
      if (response.ok) {
        let json = await response.json();
        setDiscussionsData(json);
        setIsLoading(false);
      } else {
        console.log("HTTP-Error: " + response.status);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [newQuestion]);

  if (!isLoading) {
    return discussionsData.map((el) => {
      return <Discussion data={el} key={el.id} />;
    });
  } else {
    return "Server is temporarily unavailable. Please contact the administrator";
  }
};

export default Discussions;
