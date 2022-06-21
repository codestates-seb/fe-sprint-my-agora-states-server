import { useEffect, useState } from "react";
import { getAllList } from "../api";
import Loading from "../Loading";
import ListItem from "./ListItem";

const List = () => {
  const getList = getAllList();
  const [list, setList] = useState([]);

  useEffect(() => {
    getList.then((data) => setList(data));
  }, []);

  return (
    <section class="discussion__wrapper">
      <ul class="discussions__container">
        {list === undefined ? (
          <Loading />
        ) : (
          list.map((item) => (
            <ListItem
              key={item.id}
              imgSrc={item.avatarUrl}
              title={item.title}
              url={item.url}
              author={item.author}
              time={item.createdAt}
            />
          ))
        )}
      </ul>
    </section>
  );
};

export default List;
