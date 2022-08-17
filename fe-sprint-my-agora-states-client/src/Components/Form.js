import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
    const [name, setName] = useState();
    const [title, setTitle] = useState();
    const [question, setQuestion] = useState();

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleQuestionChange = (e) => {
        setQuestion(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({name: name, title: title, question: question});
    }
    
    return (
        <section className="form__container">
            <form className="form">
                <div className="form__input--wrapper">
                    <div className="form__input--name">
                        <label className='vertical'>Name</label>
                        <input type="text" value={name} onChange={handleNameChange} />
                    </div>
                    <div className="form__input--title">
                        <label className='vertical'>Title</label>
                        <input type="text" value={title} onChange={handleTitleChange} />
                    </div>
                    <div className="form__textbox">
                        <label className='vertical'>Question</label>
                        <textarea type="text" value={question} onChange={handleQuestionChange} />
                    </div>
                    <div className="form__submit">
                        <button id='submit' onSubmit={handleSubmit}>Submit</button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Form;