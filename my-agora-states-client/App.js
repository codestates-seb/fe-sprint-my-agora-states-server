import './App.css';
import React  from 'react';
import Nav from './components/Nav'
import Button from './components/Button'
import SubmitQ from './components/SubmitQ';
import Contents from './components/Contents';
import { useEffect,useState } from 'react';
import Loader from "react-spinners/PuffLoader";

function App() {

  const [discussions,setDiscussions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [opacity,setOpacity] = useState(8);
  const [submit,setSubmit] = useState([]);

  // 투명도 조절
  const opacityChange = (e) => {
    setOpacity(e.target.value);
    const container = document.querySelectorAll('.discussion__container');
    console.log('evnet',container)
    for(let ele of container) {
      ele.style.backgroundColor = `rgba(255,255,255,${e.target.value*0.1})`;
    }
  }

  // 직접 작성하여 submit 시에 저장되는 locatlstorage에서 데이터 가져오기
  const addLocalstorage = () => {
    const getDiscussString = window.localStorage.getItem('discuss');
  
    if(getDiscussString === null) {
      return;
    }
  
    const getDiscussArr = JSON.parse(getDiscussString);
    setSubmit(getDiscussArr);
  }

  useEffect(()=>{
    setIsLoading(true);
    addLocalstorage();
      fetch('http://localhost:4000/discussions')
        .then((response) => response.json())
        .then((data)=> {
          setDiscussions(data);
          setTimeout(function(){
            setIsLoading(false);
          },5000)
        });
  },[]);

  return (
    <>
      <Nav/>
      <main>
        <SubmitQ setSubmit={setSubmit}/>
        <section className="discussion__wrapper">
          <div className="range">
              <input type="range" min="0" max="10" value={opacity} id="opacity" onChange={opacityChange}/>
          </div>
          <ul className="discussions__container">
            {isLoading ? <Loader color="#ffffff" size={300} cssOverride={{margin:'200px 150px'}} /> : 
            <>
              {submit.map((x)=>{return <Contents content={x}/>})}
              {discussions.map((x)=>{return <Contents content={x}/>})}
            </>
            }
          </ul>
        </section>
      </main>
      <Button/>
    </>
  );
}

export default App;
