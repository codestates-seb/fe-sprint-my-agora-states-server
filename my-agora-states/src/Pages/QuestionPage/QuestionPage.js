import { useState } from "react";
import axios from 'axios';

import "./QuestionPage.css";

export const QuestionPage = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAuthorChange = e => setAuthor(e.target.value);
  const handleTitleChange = e => setTitle(e.target.value);
  const handleContentChange = e => setContent(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const body = {
      createdAt: new Date(),
      updatedAt: new Date(),
      title,
      author,
      answer: null,
      // bodyHTML:
      //   '<p dir="auto">--------------- 여기서부터 복사하세요 ---------------</p>\n<p dir="auto">운영 체제: 예) macOS</p>\n<p dir="auto">현재 어떤 챕터/연습문제/과제를 진행 중이고, 어떤 문제에 부딪혔나요?<br>\nPair 과제 / JavaScript Koans</p>\n<p dir="auto">npm install 명령어 입력 시 env: node: No such file or directory 라고 뜹니다</p>\n<p dir="auto">에러 발생하여 아래 명령어 실행 했는데도 불구하고 똑같은 에러가 발생했습니다<br>\nnpm cache clean --force</p>\n<p dir="auto">rm package-lock.json</p>\n<p dir="auto">rm -rf ./node_modules/</p>\n<p dir="auto">npm --verbose install</p>\n<p dir="auto">폴더 자체가 문제가 있다고 생각하여 github에서 다시 fork 후 진행했는데도 같은 에러가 발생했습니다<br>\n리눅스 기초 챕터 때 npm 설치해서 마지막 submit까지는 잘 됐는데 현재 짝수 생성기 폴더도 똑같이 npm install 시 no such file or directory가 발생합니다</p>\n<p dir="auto">에러가 출력된 곳에서, 이유라고 생각하는 부분을 열 줄 이내로 붙여넣기 해 주세요. (잘 모르겠으면 에러라고 생각하는 곳을 넣어주세요)</p>\n<div class="highlight highlight-source-js position-relative overflow-auto" data-snippet-clipboard-copy-content="minjun@dubi fe-sprint-javascript-koans-main % pwd \n/Users/minjun/Documents/fe_frontand_39/fe-sprint-javascript-koans-main\nminjun@dubi fe-sprint-javascript-koans-main % npm install \nenv: node: No such file or directory"><pre><span class="pl-s1">minjun</span>@<span class="pl-s1">dubi</span> <span class="pl-s1">fe</span><span class="pl-c1">-</span><span class="pl-s1">sprint</span><span class="pl-c1">-</span><span class="pl-s1">javascript</span><span class="pl-c1">-</span><span class="pl-s1">koans</span><span class="pl-c1">-</span><span class="pl-s1">main</span> <span class="pl-c1">%</span> <span class="pl-s1">pwd</span> \n<span class="pl-c1">/</span><span class="pl-v">Users</span><span class="pl-c1">/</span><span class="pl-s1">minjun</span><span class="pl-c1">/</span><span class="pl-v">Documents</span><span class="pl-c1">/</span><span class="pl-s1">fe_frontand_39</span><span class="pl-c1">/</span><span class="pl-s1">fe</span><span class="pl-c1">-</span><span class="pl-s1">sprint</span><span class="pl-c1">-</span><span class="pl-s1">javascript</span><span class="pl-c1">-</span><span class="pl-s1">koans</span><span class="pl-c1">-</span><span class="pl-s1">main</span>\n<span class="pl-s1">minjun</span><span class="pl-kos"></span>@<span class="pl-s1">dubi</span> <span class="pl-s1">fe</span><span class="pl-c1">-</span><span class="pl-s1">sprint</span><span class="pl-c1">-</span><span class="pl-s1">javascript</span><span class="pl-c1">-</span><span class="pl-s1">koans</span><span class="pl-c1">-</span><span class="pl-s1">main</span> <span class="pl-c1">%</span> <span class="pl-s1">npm</span> <span class="pl-s1">install</span> \nenv: node: <span class="pl-v">No</span> <span class="pl-s1">such</span> <span class="pl-s1">file</span> <span class="pl-s1">or</span> <span class="pl-s1">directory</span></pre></div>\n<p dir="auto">검색했던 링크가 있다면 첨부해 주세요.<br>\n<a href="https://mia-dahae.tistory.com/89" rel="nofollow">https://mia-dahae.tistory.com/89</a></p>\n<p dir="auto"><a href="https://stackoverflow.com/questions/38143558/npm-install-resulting-in-enoent-no-such-file-or-directory" rel="nofollow">https://stackoverflow.com/questions/38143558/npm-install-resulting-in-enoent-no-such-file-or-directory</a></p>\n<p dir="auto"><a href="https://velog.io/@hn04147/npm-install-%ED%95%A0-%EB%95%8C-tar-ENOENT-no-such-file-or-directory-lstat-%EC%97%90%EB%9F%AC%EB%82%A0-%EA%B2%BD%EC%9A%B0" rel="nofollow">https://velog.io/@hn04147/npm-install-%ED%95%A0-%EB%95%8C-tar-ENOENT-no-such-file-or-directory-lstat-%EC%97%90%EB%9F%AC%EB%82%A0-%EA%B2%BD%EC%9A%B0</a></p>\n<p dir="auto"><a href="https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&amp;blogId=chandong83&amp;logNo=221064506346" rel="nofollow">https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&amp;blogId=chandong83&amp;logNo=221064506346</a></p>\n<p dir="auto"><a href="https://webisfree.com/2021-07-15/npm-install-%EC%97%90%EB%9F%AC-%EB%B0%9C%EC%83%9D-rename-no-such-file-or-directory-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B0%80" rel="nofollow">https://webisfree.com/2021-07-15/npm-install-%EC%97%90%EB%9F%AC-%EB%B0%9C%EC%83%9D-rename-no-such-file-or-directory-%ED%95%B4%EA%B2%B0%ED%95%98%EA%B0%80</a></p>\n<p dir="auto"><a href="https://hellowworlds.tistory.com/57" rel="nofollow">https://hellowworlds.tistory.com/57</a></p>',
      // avatarUrl:
      //   "https://avatars.githubusercontent.com/u/97888923?s=64&u=12b18768cdeebcf358b70051283a3ef57be6a20f&v=4",
      };
  };

  return (
    <form className="question-form" onSubmit={handleSubmit}>
      <div className="question-form-author">
        <label for="author">작성자</label>
        <br />
        <input type="text" id="author" name="author" value={author} onChange={handleAuthorChange} placeholder="작성자" required />
      </div>
      <div className="question-form-title">
        <label for="title">제목</label>
        <br />
        <input type="text" id="title" name="title" value={title} onChange={handleTitleChange} placeholder="제목" required />
      </div>
      <div className="question-form-content">
        <label for="content">질문</label>
        <br />
        <textarea id="content" name="content" value={content} onChange={handleContentChange} placeholder="질문" required />
      </div>
      <div className="question-form-submit">
        <input type="submit" value="제출하기" />
      </div>
    </form>
  );
};
