import "./Discussions.css";
import {useState, useEffect} from "react";


const Modal = ({data}) => {

  let date = new Date(data.createdAt);
  return (
    <div className = "modal">
        <div className="discussion__avatar--wrapper">
          <img className="discussion__avatar--image"
            src={data.avatarUrl}
            alt={data.author}/>
        </div>
        <div className="discussion__content">
          {/* <h2 className="discussion__title"><a href="https://github.com/codestates-seb/agora-states-fe/discussions/6">{data.title}</a></h2> */}
          <h2 className="discussion__title">{data.title}</h2>
          <div className="discussion__information">{data.author} / {date.toLocaleString()}</div>
        </div>
    </div>
  )
}


const Discussions = () => {
    let [modal, setModal] = useState(false);
    const [selectedData, setSelectedData] = useState(null); 
    const [data, setdata] = useState([]);
    const url = "http://localhost:4000/discussions";

    useEffect(() => {
      fetch(url).then((data) => data.json()).then((res) => setdata(res));
    }, [])

    const titleClick = (data) => {
      setSelectedData(data);
      modal === false ? setModal(true) : setModal(false);
      // return modal === true ? <Modal data = {data}/> : null;
    }

    return (
      <section className="discussion__wrapper">
        <ul className="discussions__container">
          <li className="discussion__container">
            <div className="discussion__avatar--wrapper">
              <img className="discussion__avatar--image"
                src="https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4"
                alt="avatar of kimploo"/>
            </div>
            <div className="discussion__content">
              <h2 className="discussion__title"><a href="https://github.com/codestates-seb/agora-states-fe/discussions/6">[notice] 좋은 질문하는 법</a></h2>
              <div className="discussion__information">kimploo / 2022. 04. 22. 오후 2:08:33</div>
            </div>
          </li>
          {data.map((data, idx) => {
            let date = new Date(data.createdAt);
            return (
              <li className="discussion__container" key = {idx}>
                {modal === true ? <Modal data = {selectedData} key = {idx}/> : null}
                <div className="discussion__avatar--wrapper">
                  <img className="discussion__avatar--image"
                    src={data.avatarUrl}
                    alt={data.author}/>
                </div>
                <div className="discussion__content">
                  {/* <h2 className="discussion__title"><a href="https://github.com/codestates-seb/agora-states-fe/discussions/6">{data.title}</a></h2> */}
                  <h2 className="discussion__title" onClick={() => titleClick(data)}>{data.title}</h2>
                  <div className="discussion__information">{data.author} / {date.toLocaleString()}</div>
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    );
}

export default Discussions;