import { useState } from "react";
import { UseRequest } from "../hooks/UseRequest";

const Modal = ({modalState, datalist, setFunc}) => {
    const [isClose, setIsClose] = useState(false);
    const [inputs, setInputs] = useState({ name: '', title: '', story: '' });
    const {name, title, story} = inputs;

    const postRequest = UseRequest('http://localhost:3010/discussions', 
                                    { id: datalist[0].id + 1, 
                                        createdAt: new Date().toTimeString().split(" ")[0],
                                        title: inputs.title,
                                        author: inputs.name,
                                        bodyHTML: inputs.story },
                                        'POST');

    const handleSubmitBtnClick = async (e) => {
        e.preventDefault();
        setFunc(await postRequest());
        handleCloseBtnClick();
    };
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const handleCloseBtnClick = () => {
        setIsClose(true);
        modalState(false);
    };

    return (
        <section className={isClose ? "form__container hide" : "form__container fadeIn"}>
            <div className="form__overlay"></div>
            <form action="" method="get" className="form">
                <div className="form__input--wrapper">
                <div className="form__input--name">
                    <label htmlFor="name">Enter your name: </label>
                    <input type="text" name="name" id="name" value={name} onChange={handleChange} required/>
                </div>
                <div className="form__input--title">
                    <label htmlFor="name">Enter your title: </label>
                    <input type="text" name="title" id="title" value={title} onChange={handleChange} required />
                </div>
                <div className="form__textbox">
                    <label htmlFor="story">Your question: </label>
                    <textarea id="story" name="story" placeholder="질문을 작성하세요" value={story} onChange={handleChange} required></textarea>
                </div>
                </div>
                <div className="form__submit">
                    <input type="submit" value="submit" className="submit" onClick={handleSubmitBtnClick} />
                </div>
            </form>
            <button className="close-modal" onClick={handleCloseBtnClick}>Close</button>
        </section>
    );
};

export default Modal;