//입력 시간 - 한국 시간으로 지정
const newDate = new Date().toLocaleString('ko-KR');  

//fetch 사용
fetch('http://localhost:4000/discussions')
.then(response => response.json())
.then(data => {
    const datas = data;
    const ul = document.querySelector('ul.discussions__container');
    render(ul, data);
    // data.forEach(discussion =>{
    //     const li = document.createElement('li');
    //     render(ul, data);
    // });
            // li.classlist.add('discussion__container');
        // li.innerHTMl = `
        // <div class="discussion__avatar--wrapper">
        //   <img class="discussion__avatar--image"
        //     src="${discussion.avatar}"
        //     alt="avatar of ${discussion.username}">
        // </div>
        // <div class="discussion__content">
        //   <h2 class="discussion__title"><a href="${discussion.url}">${discussion.title}</a></h2>
        //   <div class="discussion__information">${discussion.username} / ${discussion.createdAt}</div>
        // </div>
        // <div class="discussion__answered"><p>${discussion.isAnswered ? '☑' : ''}</p></div>
        // `;
        // ul.appendChild(li);
})
.catch(error => console.error(error));

// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (...datas) => {
  const li = document.createElement("li"); // li 요소 생성
  li.className = "discussion__container"; // 클래스 이름 지정

  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "discussion__avatar--wrapper";
  const discussionContent = document.createElement("div");
  discussionContent.className = "discussion__content";
  const discussionAnswered = document.createElement("div");
  discussionAnswered.className = "discussion__answered";

  // 아이콘 이미지
  const avatarImage = document.createElement('img');
  avatarImage.className = 'discussion__avatar--image';
  avatarImage.src = datas[0].avatarUrl;
  avatarImage.alt = 'avatar of' + datas[0].author;
  avatarWrapper.append(avatarImage);
  
  // title 
  const title = document.createElement('h2');
  title.className = 'discussion__title';
  discussionContent.append(title);
  const theTitle = document.createElement('a');
  theTitle.textContent = datas[0].title;
  title.append(theTitle);
  theTitle.href = datas[0].url;

  //저자 & 작성자 
  const theAuthor = document.createElement('div');
  theAuthor.className = 'discussion__information';
  createdAt = new Date(datas[0].createdAt).toLocaleString('kr-KR');
  theAuthor.textContent = datas[0].author + " / " + createdAt;
  discussionContent.append(theAuthor);
  // createInfo.textContent = `${obj.author} / ${newDate(obj.createdAt).toLocalString()}`;

  // 체크 표시 : 임시 함수 걸을 예정. 
  // discussionAnswered.textContent = '☑';
  const answeredCheckBox = document.createElement('p');
  if(datas[0].answer !== null){
    answeredCheckBox.textContent = '☑';
  } else{
    answeredCheckBox.textContent = '☐';
  }
  discussionAnswered.append(answeredCheckBox);


  li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;
};

// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
const render = (element, data) => {
  for (let i = 0; i < data.length; i += 1) {
    element.append(convertToDiscussion(data[i]));
  }
  return;
};

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector("ul.discussions__container");
render(ul, data);

const form = document.querySelector('form.form');
const title = document.querySelector('input#title');
const author = document.querySelector('input#name');
const ques = document.querySelector('textarea#story');

form.addEventListener('submit', (e) => {
   // 새로 고침 막는 법 
  e.preventDefault(); // 새로고침 방지 
  //form요소가 기본적으로 가지고 있는 요소가 실행 될 때, 새로고침시 돌아가는? 
  const newDiscussion = {
    id: "unique value",
    createdAt: newDate,
    title: title.value,
    url: "https://github.com/codestates-seb/agora-states-fe/discussions/45",
    author: author.value,
    answer: {
      id: "DC_kwDOHOApLM4AKg6M",
      createdAt: "2022-05-16T02:09:52Z",
      url: "https://github.com/codestates-seb/agora-states-fe/discussions/45#discussioncomment-2756236",
      author: "Kingsenal",
      bodyHTML:
        '<p dir="auto">안녕하세요. <a class="user-mention notranslate" data-hovercard-type="user" data-hovercard-url="/users/dubipy/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/dubipy">@dubipy</a> 님!<br>\n코드스테이츠 교육 엔지니어 권준혁 입니다. <g-emoji class="g-emoji" alias="raised_hands" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f64c.png">🙌</g-emoji></p>\n<p dir="auto">질문 주신 내용은 노드 환경이 구성되어 있지 않기 때문에 발생되는 문제로 확인됩니다.</p>\n<p dir="auto"><code class="notranslate">brew unlink node &amp;&amp; brew link node</code></p>\n<p dir="auto">노드를 연결해 보시고 안된다면</p>\n<p dir="auto"><code class="notranslate">brew link --overwrite node</code></p>\n<p dir="auto">이 명령어를 그 다음에도 안된다면 접근권한 문제일 가능성이 큽니다.</p>\n<p dir="auto"><code class="notranslate">$ sudo chmod 776 /usr/local/lib</code> 접근 권한 변경 후<br>\n<code class="notranslate">$ brew link --overwrite node</code> 다시 연결을 해보세요 !</p>\n<p dir="auto">그럼에도 안된다면 다시 한 번 더 질문을 남겨주세요 !</p>\n<p dir="auto">답변이 되셨다면 내용을 간략하게 정리해서 코멘트를 남기고 answered를 마크해주세요 <g-emoji class="g-emoji" alias="white_check_mark" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/2705.png">✅</g-emoji><br>\n감사합니다.<g-emoji class="g-emoji" alias="rocket" fallback-src="https://github.githubassets.com/images/icons/emoji/unicode/1f680.png">🚀</g-emoji><br>\n코드스테이츠 교육 엔지니어 권준혁</p>',
      avatarUrl: "https://avatars.githubusercontent.com/u/79903256?s=64&v=4",
    },
    bodyHTML: ques.value,
    avatarUrl:
      "https://avatars.githubusercontent.com/u/97888923?s=64&u=12b18768cdeebcf358b70051283a3ef57be6a20f&v=4",
  };
  ul.prepend(convertToDiscussion(newDiscussion));
  //질문 작성 후 초기화
  title.value = "";
  author.value = "";
  ques.value = "";

})

// pageNation 기능 구현 
const currentPage = 1;  // 현재 페이지
const totalCount = 53; //  총 데이터 갯수
const pageCount = 5; // 화면에 나타날 번호  갯수
const limit = 10;   //한 페이지 당 나타날 데이터 갯수

let totalPage = Math.ceil(totalCount / limit) // 6 ( 53/10은 5 ..3 - 나머지 3은 6p에 저장)

//현재 페이지 그룹을 구하기 
let pageGroup = Math.ceil(currentPage/pageCount) // 현재 페이지를 보여줄 페이지로 나누기 : 올림 1

// 현재 페이지 그룹의 첫 번째, 마지막 숫자 구하기  + 이전 다음 버튼 
let lastNumber = pageGroup * pageCount; // 현재 페이지 그룹 x 현재 화면에 나타는 갯수 
if( lastNumber > totalPage){
  lastNumber = totalPage
}

let firstNumber = lastNumber-(pageCount-1)

const next = lastNumber + 1;
const prev = firstNumber -1;

//1~5만큼 페이지 네이션 그려줌 
for( let i= firstNumber; i<= lastNumber; i++){
  html += `<button class="pageNumber" id="page_${i}">${i}</button>`
}
