import { useEffect } from "react";

const Discussions = function (props) {
    const convertToDiscussion = (obj) => {
        const li = document.createElement("li"); // li 요소 생성
        li.className = "discussion__container"; // 클래스 이름 지정

        const avatarWrapper = document.createElement("div");
        avatarWrapper.className = "discussion__avatar--wrapper";

        const discussionContent = document.createElement("div");
        discussionContent.className = "discussion__content";

        const discussionAnswered = document.createElement("div");
        discussionAnswered.className = "discussion__answered";

        // TODO: 객체 하나에 담긴 정보를 DOM에 적절히 넣어주세요.

        //아바타 이미지를 불러와 avatarWrapper에 append
        let avatarImg = document.createElement('img')
        avatarImg.src = obj.avatarUrl
        avatarImg.alt = 'avatar of ' + obj.author;
        avatarImg.classList.add('discussion__avatar--image')
        avatarWrapper.append(avatarImg);

        //질문 제목을 불러와 discussionContent에 append
        let discussionTitle = document.createElement('h2')
        discussionTitle.classList.add('discussion__title')
        let discussionURL = document.createElement('a')
        discussionURL.href = obj.url
        discussionURL.textContent = obj.title
        discussionTitle.append(discussionURL)
        discussionContent.append(discussionTitle)

        //질문 작성자와 작성 시간을 불러와 discussionContent에 append
        let discussionInfo = document.createElement('div')
        discussionInfo.classList.add('discussion__information')
        discussionInfo.textContent = obj.author + ' / ' + obj.createdAt
        discussionContent.append(discussionInfo)

        // 답변이 달려있으면 O, 아니면 X를 추가
        let isAnswered = document.createElement('p')
        isAnswered.classList.add('discussion__answered')
        if (obj.answer === null || obj.answer === 'no answer') {
            isAnswered.textContent = '❌'
        } else {
            isAnswered.textContent = '✅'
        }
        discussionAnswered.append(isAnswered)

        li.append(avatarWrapper, discussionContent, discussionAnswered);
        return li;
    };

    // agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
    const ul = document.querySelector("ul.discussions__container");
    console.log(props.discussion.length)
    const render = (element) => { // 여기 엘리먼트는 ul.discussions__container 이게 들어옴
        for (let i = 0; i < props.discussion.length; i += 1) {
            element.append(convertToDiscussion(props.discussion[i]));
        }
        return;
    };
    console.log(ul)
    render(ul)
        
    return (
        <section className="discussion__wrapper">
            <ul className="discussions__container">
                <li className="discussion__container">
                    <div className="discussion__avatar--wrapper">
                        <img className="discussion__avatar--image"
                            src="https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4"
                            alt="avatar of kimploo" />
                    </div>
                    <div className="discussion__content">
                        <h2 className="discussion__title"><a
                            href="https://github.com/codestates-seb/agora-states-fe/discussions/6">[notice] 좋은 질문하는 법</a></h2>
                        <div className="discussion__information">kimploo / 2022-04-22T14:08:33Z</div>
                    </div>
                    <div className="discussion__answered">
                        <p>❌</p>
                    </div>
                </li>
            </ul>
        </section>
    )
}

export default Discussions;