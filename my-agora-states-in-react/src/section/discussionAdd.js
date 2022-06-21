import { useState } from "react";

const DiscussionAdd = ({discussion, setDiscussion})=>{

const [userName, setUserName] = useState('');
const [userTitle, setUserTitle] = useState('');
const [userQ, setUserQ] = useState('');



  const handleSubmit = () =>{

    const item = {
      id: discussion.length+1,
      author: userName,
      avatarUrl: `https://randomuser.me/api/portraits/women/33.jpg`,
      title: userTitle,
      userQ : userQ,
      createdAt: new Date(new Date().getTime()).toLocaleString()
    }

    const newItem = [item, ...discussion];
    setDiscussion(newItem);
  }

  const handleChangeUser = (e) => setUserName(e.target.value);
  const handleChangeTitle = (e)=> setUserTitle(e.target.value);
  const handleChangQ = (e)=> setUserQ(e.target.value);
    
    return (
        <section className="form__container">
        <div action="" method="get" className="form">
  
          <div className="form__input--wrapper">
            <div className="form__input--name">
              <label htmlFor="name">Name : </label>
              <input type="text" name="name" id="name" placeholder="Enter your name" onChange={handleChangeUser} required />
              <div className="hide message top" id="mesaage__name">3글자 이상 입력하세요.</div>
            </div>
            <div className="form__input--title">
              <label htmlFor="name">Title : </label>
              <input type="text" name="title" id="title" placeholder="Enter your title" onChange={handleChangeTitle} required />
              <div className="hide message top" id="message__title">5글자 이상 입력하세요.</div>
            </div>
            <div className="form__textbox">
              <label htmlFor="story">Your question</label>
              <div className="hide message bot" id="message__story">10글자 이상 입력하세요.</div>
              <textarea id="story" name="story" placeholder="질문을 작성하세요(10글자 이상)" onChange={handleChangQ} required></textarea>
            </div>
          </div>
  
          <div className="form__submit">
            <input type="submit" value="submit" id="button" onClick={handleSubmit}/>
          </div>
        </div>
      </section>
        
    )
}

export default DiscussionAdd;