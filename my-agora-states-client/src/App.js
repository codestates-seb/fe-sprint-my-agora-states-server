import Login from'./component/Login.js'
import Discussions from'./component/Discussions.js'
import './style/global.css'
import { useEffect, useState } from 'react';
import LoadingIndicator from './component/LoadingIndicator.js';

export default function App() {
  const [ discussions , setDiscussions ] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
    setIsLoading(true);
    fetch('http://localhost:4000/discussions')
      .then((response) => response.json())
      .then((data)=> {
      setDiscussions(data)
      setIsLoading(false);
  })
  }, []);

  return (
    <div className='All'>
      <div>
      <h1> my-agora-states </h1>
      </div>

      <main>
        {/* 위 로그인 박스 - 전 아고라스테이츠 프로젝트 참고 */}
        <Login />
   
        {/* 아래 댓글 창 */}
        {isLoading ? 
          <LoadingIndicator /> : <Discussions discussions={discussions}/> 
        }
      </main>
      
    </div>
  );
}
