function SubmitQ() {

    const onClick = () => {
        const name = document.getElementById('name').value;
        const title = document.getElementById('title').value;
        const story = document.getElementById('story').value;
        
        // 현재 시간 구하기
        const today = new Date();
        const year = today.getFullYear(); // 년도
        const month = today.getMonth() > 9 ? today.getMonth()+1:'0'+(today.getMonth()+1);  // 월
        const date = today.getDate() > 9 ? today.getDate():'0'+today.getDate();  // 날짜
        const hours = today.getHours() > 9 ? today.getHours():'0'+today.getHours();; // 시
        const minutes = today.getMinutes() > 9 ? today.getMinutes():'0'+today.getMinutes();;  // 분
        const seconds = today.getSeconds() > 9 ? today.getSeconds():'0'+today.getSeconds();; // 초

        const createdAt = `${year}-${month}-${date}T${hours}:${minutes}:${seconds}Z`;

        if(name === '' || title === '' || story === '') {
            return;
        }
        // 저장할 객체 생성
        const obj = {
            avatarUrl : "https://avatars.githubusercontent.com/u/97888923?s=64&u=12b18768cdeebcf358b70051283a3ef57be6a20f&v=4",
            url : 'https://naver.com',
            author : name,
            title : title,
            story : story,
            createdAt : createdAt,
            answer : null
        }

        // Local storage 이용해서 값 추가하기
        const getDiscussString = window.localStorage.getItem('discuss');

        if(getDiscussString === null) {
            window.localStorage.setItem('discuss', JSON.stringify([obj]));
        } else {
            const getDiscussArr = JSON.parse(getDiscussString);
            getDiscussArr.unshift(obj);
            window.localStorage.setItem('discuss', JSON.stringify(getDiscussArr));
        }
        
        setTimeout(function(){},5000);
    }

    return(
        <section className="form__container">
            <div className='form__wrapper'>
                <h1 className="form__title">Write Your
                Question</h1>
                <form action="" method="get" className="form">
                <div className="form__input--wrapper">
                    <div className="form__input--title">
                    <input type="text" name="title" id="title" placeholder="Title" required/>
                    </div>
                    <div className="form__input--name">
                    <input type="text" name="name" id="name" placeholder="Name" required/>
                    </div>
                    <div className="form__textbox">
                    <textarea id="story" name="story" placeholder="Contents" required></textarea>
                    </div>
                </div>
                <div className="form__submit">
                    <input type="submit" value="submit" onClick={onClick}/>
                </div>
                </form>
            </div>
        </section>
    )
}

export default SubmitQ