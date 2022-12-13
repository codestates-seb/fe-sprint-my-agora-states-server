async function getData() {
  const data = await fetch("http://localhost:4000/discussions")
    .then((response) => response.json())
    .then((json) => {
      return json;
    });
  return data;
}

getData().then((result) => {
  localStorage.setItem("agoraStatesDiscussions", JSON.stringify(result));
});

let data;
const strorageData = localStorage.getItem("agoraStatesDiscussions");

if (strorageData) {
  data = JSON.parse(strorageData);
} else {
  data = agoraStatesDiscussions.slice();
}

//입력폼
const inputUserName = document.querySelector("#user-name");
const inputTitle = document.querySelector("#title-name");
const inputStory = document.querySelector("#story");
const submitBtn = document.querySelector("#submit");
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const obj = {
    id: "unique id",
    createdAt: new Date().toISOString(),
    title: inputTitle.value,
    url: "https://github.com/codestates-seb/agora-states-fe/discussions",
    author: inputUserName.value,
    answer: null,
    bodyHTML: inputStory.value,
    avatarUrl:
      "https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4",
  };
  data.unshift(obj);

  localStorage.setItem("agoraStatesDiscussions", JSON.stringify(data));

  render(ul, 1);

  inputUserName.value = "";
  inputTitle.value = "";
  inputStory.value = "";
});

const convertToDiscussion = (obj) => {
  const li = document.createElement("li");
  li.className = "discussion__container";

  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "discussion__avatar--wrapper";
  const discussionContent = document.createElement("div");
  discussionContent.className = "discussion__content";
  const discussionAnswered = document.createElement("div");
  discussionAnswered.className = "discussion__answered";

  const avatarImg = document.createElement("img");
  avatarImg.className = "discussion__avatar--image";
  avatarImg.src = obj.avatarUrl;
  avatarImg.alt = "avatar of " + obj.author;
  avatarWrapper.append(avatarImg);

  const discussionTitle = document.createElement("h2");
  discussionTitle.className = "discussion__title";
  const discussionTitleLink = document.createElement("a");
  discussionTitleLink.href = obj.url;
  discussionTitleLink.textContent = obj.title;
  discussionTitle.append(discussionTitleLink);
  discussionContent.append(discussionTitle);

  const discussionInfo = document.createElement("div");
  discussionInfo.className = "discussion__information";
  discussionInfo.textContent = `${obj.author} / ${new Date(
    obj.createdAt
  ).toLocaleString()}`;

  discussionContent.append(discussionInfo);

  const discussionAnswer = document.createElement("p");
  discussionAnswer.textContent = obj.answer ? "✅" : "❌";
  discussionAnswered.append(discussionAnswer);

  li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;
};

const ul = document.querySelector("ul.discussions__container");
let currentNum = 1;

//페이징
const paging = (array) => {
  let lastNum = Math.ceil(array.length / 10);

  const pagingWrapper = document.createElement("section");
  pagingWrapper.className = "paging__wrapper";

  const pagingContainer = document.createElement("ul");
  pagingContainer.className = "paging__container";
  pagingWrapper.append(pagingContainer);

  for (let i = 1; i <= lastNum; i++) {
    const pagingList = document.createElement("li");
    pagingList.className = "page";
    pagingContainer.append(pagingList);
    pagingList.textContent = i;

    if (pagingList.textContent === currentNum.toString()) {
      pagingList.classList.add("active");
    }

    pagingList.addEventListener("click", function (e) {
      e.preventDefault();

      currentNum = e.target.textContent;

      for (let i = 0; i < lastNum; i++) {
        document.querySelectorAll(".page")[i].classList.remove("active");
      }
      e.target.classList.add("active");

      ul.replaceChildren();
      render(ul, currentNum);
    });
  }

  const prevBtn = document.createElement("span");
  prevBtn.className = "previous__button";
  prevBtn.textContent = "<";
  pagingWrapper.prepend(prevBtn);
  const nextBtn = document.createElement("span");
  nextBtn.className = "next__button";
  nextBtn.textContent = ">";
  pagingWrapper.append(nextBtn);

  prevBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentNum === 1) {
      currentNum = 1;
    } else {
      currentNum--;
    }

    activeMove(currentNum, lastNum);

    ul.replaceChildren();
    render(ul, currentNum);
  });

  nextBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (currentNum >= lastNum) {
      currentNum = lastNum;
    } else {
      currentNum++;
    }
    activeMove(currentNum, lastNum);
    ul.replaceChildren();
    render(ul, currentNum);
  });

  return pagingWrapper;
};

function activeMove(num, lastNum) {
  let activeNum = num - 1;

  for (let i = 0; i < lastNum; i++) {
    document.querySelectorAll(".page")[i].classList.remove("active");
  }
  document.querySelectorAll(".page")[activeNum].classList.add("active");
}

const render = (element, num) => {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

  let pagingArray = data.slice((num - 1) * 10, num * 10);

  for (let i = 0; i < pagingArray.length; i++) {
    element.append(convertToDiscussion(pagingArray[i]));
  }

  return;
};

render(ul, currentNum);

const main = document.querySelector("main");
main.append(paging(data));
