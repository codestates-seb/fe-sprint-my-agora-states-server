import './App.css'
import Submit from './Submit';
import Notice from './Notice'
import DiscussionList from './DiscussionList'
import {useState , useEffect, useCallback} from 'react';

const App = ()=>{
  const [data, setData] = useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/discussions/')
    .then(data => data.json())
    .then(res => {
      console.log(res)
      res = res.reverse();
      res.splice(0, 5);
      res =res.reverse();
      setData(res);
    })
  }, [])

  return (
    <div className="App">
      <nav className="navbar">
        <ul className="nav-container">
          <li>Home</li>
          <li>Menu1</li>
          <li>Menu2</li>
        </ul>
      <div className="user-container">
        <h5>반갑습니다. nyang-punch님</h5>
        <img
          className="catImg"
          src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
          alt="유저이미지"
        />
      </div>
      </nav>

      <button className="scroll-top-btn"></button>
    <main>
      <div className="title-logo"><h1 className="agora-text">My Agora States</h1></div>


      <Submit />
      {/* Notice */}
      <Notice />


      <DiscussionList data={data}/>

    </main>
    </div>
  )
}

export default App;