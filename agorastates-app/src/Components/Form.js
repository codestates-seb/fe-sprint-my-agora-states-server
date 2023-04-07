import "./Form.css";
import {useState} from "react";

const From = () => {
    const [name, setName] = useState();
    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    const nameHandle = (e) => {
        setName(e.target.value);
    }

    const titleHandle = (e) => {
        setTitle(e.target.value);
    }

    const contentHandle = (e) => {
        setContent(e.target.value);
    }

    const submitHandle = () => {
        let body = JSON.stringify({
            author: name,
            title: title,
            bodyHTML: content,
            createdAt: new Date(),
            avatarUrl: "https://avatars.githubusercontent.com/u/97888923?s=64&u=12b18768cdeebcf358b70051283a3ef57be6a20f&v=4"
        });
        console.log(body);
        fetch("http://localhost:4000/discussions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: body
        }).then(res => {
            if (res.status === 201) {
                alert("게시 완료");
            }
            else {
                alert(res.status);
            }
        });
    }


    return (
    <section className="form__container">
        <h1>My Agora States</h1>
        <form className="form">
            <div className="form__input--wrapper">
                <div className="form__input--name">
                    <h3>Name</h3>
                    <input type="text" name="name" id="name" onChange={nameHandle}/>
                </div>
                <div className="form__input--title">
                    <h3>Title</h3>
                    <input type="text" name="title" id="title" onChange={titleHandle}/>
                </div>
                <div className="form__textbox">
                    <h3>Question content</h3>
                    <textarea id="story" name="story" placeholder="질문을 작성하세요" onChange={contentHandle}></textarea>
                </div>
            </div>
            <div className="form__submit" onClick={submitHandle}>
                <input type="submit" value="submit"/>
            </div>
        </form>
    </section>
    );
}

export default From