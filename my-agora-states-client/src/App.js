import "./App.css";
import SubmitForm from "./components/SubmitForm";
import Discussions from "./components/Discussions";
import { useEffect, useState } from "react";

function App() {
  // discussion 데이터 상태 관리
  const domain = "http://localhost:3001";
  const [discussions, setDiscussions] = useState([]);

  // 기존에 만든 나만의 아고라 스테이츠를 React로 옮기기
  // 디스커션 나열 기능
  // 디스커션 추가 기능

  // 로컬 환경에서 실행한 나만의 아고라 스테이츠 서버에서 discussions 데이터를 조회합니다.
  // 더 이상 data.js 파일을 사용하지 않고, discussions 데이터를 받아옵니다.
  // Fetch API를 이용합니다.

  /* 리액트 입장에서 fetch 등의 네트워크 요청은 같은 input이 들어왔을때, 같은 output을 보장하지 않기 때문에 (성공과 실패를 보장할 수 없음)
    사이드 이펙트이며 useEffect로 관리해야 한다. */
  useEffect(() => {
    getDiscussion(domain + '/discussions');
  }, []); // 최초 한번만 불러올 것이면 의존성 배열을 주어야 함.

  const getDiscussion = (url) => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setDiscussions(data);
      });
  };

  return (
    <main>
      <h1 class="main__logo">🌱️ My Agora States</h1>
      <SubmitForm />
      <Discussions discussions={discussions}/>
    </main>
  );
}

export default App;
