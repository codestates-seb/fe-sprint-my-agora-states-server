import Login from'./component/Login.js'
import Discussion from'./component/Discussion.js'
import './style/global.css'
import { useEffect, useState } from 'react';

export default function App() {
  // const [ agora , setAgora ] = useState([]);

  const fetchApi = ()=> {
    fetch('http://localhost:4000/')
      .then((response) => response.json())
      .then((data)=> console.log(data))
  };

  return (
    <div className='All'>
      <div>
      <h1> my-agora-states </h1>
      </div>

      <main>
      <div>
        {/* 위 로그인 박스 - 전 아고라스테이츠 프로젝트 참고 */}
        <Login />
        </div>
      <div>
        {/* 아래 댓글 창 */}
        <Discussion />
          <section>
          {fetchApi}
          </section>
      </div>
      </main>
      
    </div>
  );
}
