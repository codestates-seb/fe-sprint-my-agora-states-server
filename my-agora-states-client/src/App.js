import "./App.css";
import SubmitForm from "./components/SubmitForm";
import Discussion from "./components/Discusion";
import { useEffect, useState } from 'react';

function App() {
  // discussion 데이터 상태 관리
  const [discussions, setDiscussions] = useState([]);

  // 기존에 만든 나만의 아고라 스테이츠를 React로 옮기기
  // 디스커션 나열 기능
  // 디스커션 추가 기능

  // 로컬 환경에서 실행한 나만의 아고라 스테이츠 서버에서 discussions 데이터를 조회합니다.
  // 더 이상 data.js 파일을 사용하지 않고, discussions 데이터를 받아옵니다.
  // Fetch API를 이용합니다.

  // 서버 더미 데이터 가져오기
  // useEffect(() => {
  //   fetch(`http://localhost:3001`, {
  //     method: "GET",
  //     // body: JSON.stringify(body),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).then((res) => res.json())
  //     .then((data) => {
  //       console.log('fetch~~~~~~~~~~');
  //       setDiscussions(data);
  //     });
  // })

  return (
    <main>
      <h1 class="main__logo">🌱️ My Agora States</h1>
      <SubmitForm/>
      <section class="discussion__wrapper">
        <ul class="discussions__container">
          <Discussion/>
        </ul>
      </section>
    </main>
  );
}

export default App;