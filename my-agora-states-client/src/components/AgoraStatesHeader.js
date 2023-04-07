// import { Routes, Route, Link } from 'react-router-dom';

import '../styles/AgoraStatesHeader.css';

export default function AgoraStatesHeader() {
  return (
    <div>
      <h1 className="title">
        <a href="/">
          <span className="icon">🚧</span>
          Agrora States
        </a>
      </h1>
      <div className="subscription">
        모든 팀원이 쉽게 찾아볼 수 있도록 질문에 대한 답변을 한 곳에
        모아두었습니다. <br /> 새로운 질문을 올려놓을 수도 있어요.
        <div className="subscription_extra">
          ↓ 데이터베이스 관련 답변 또는 한 달 이상 지나 업데이트가 필요한 답변과
          같이 데이터베이스의 다른 보기를 보려면 아래의 모든 질문을 클릭하세요.
        </div>
      </div>

      {/* <Routes>
        <Route path="/discussion/:id" element={<Test />} />
      </Routes> */}
    </div>
  );
}
