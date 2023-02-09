import { useEffect, useState } from "react"
import HotBoard from "./HotBoard"
import MainRight from "./MainRight"
import QuestionContent from "./QuestionContent"

const Main = ({ agoraDataArr }) => {

    const [text, setText] = useState({
        avatarUrl:'https://avatars.githubusercontent.com/u/117655658?s=40&v=4',
        author: '',
        title: '',
        '질문 내용': '',
        createdAt: new Date().toISOString()
    })
    const textHandler = (e) => {
        setText({
            ...text,
            [e.target.name]: e.target.value
        })
    }
    localStorage.setItem('agora',JSON.stringify(agoraDataArr))

    return <div id="main">
        <div id="main_left_section">
            <div id="main_question_box">
                <QuestionContent name={'아이디'} textHandler={textHandler} />
                <QuestionContent name={'질문 제목'} textHandler={textHandler} />
                <QuestionContent name={'질문 내용'} textHandler={textHandler} />
                <button id="submitBtn" >등록하기</button>
            </div>
            {agoraDataArr.slice(0, 2).map((x, i) => <HotBoard i={i} data={x} />)}
        </div>
        <div id="main_right_section">
            <MainRight text={text}/>
        </div>
    </div>

}

export default Main