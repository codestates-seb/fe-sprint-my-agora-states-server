

const QuestionContent = ({ name, textHandler }) => {

    const nameObj = {
        '아이디': { holder: '아이디를 적어주세요.' },
        '질문 제목': { holder: '제목을 적어주세요.' },
        '질문 내용': { holder: '내용을 적어주세요.', id: 'text_box' },
    }

    
    const nameChane = {
        '아이디' : 'author',
        '질문 제목' : 'title'
    }


    

    let className = 'question_content'
    if (name !== '질문 내용') {
        className = 'question_content input_box'
    }
    return <div className={className} >
        <div className="name_box" id={nameObj[name].id}>
            {name} :
        </div>
        <div>
            {name === '질문 내용' ?
                <textarea type="text" name={name} placeholder={nameObj[name].holder} onChange={textHandler} />
                :
                <input type="text" name={nameChane[name]} placeholder={nameObj[name].holder} onChange={textHandler} />}
        </div>
    </div>
}

export default QuestionContent;