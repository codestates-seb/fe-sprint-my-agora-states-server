import './style.css';
import './global-style.css'

function App() {
  return (
  <main className="app">
      <h1>My Agora States</h1>
      <section className="form__container">
        <form action="" method="get" className="form">
          <div className="form__input--wrapper">
            <div className="form__input--name">
              <input type="text" name="name" id="name" required/>
            </div>
            <div className="form__input--title">
              <input type="text" name="name" id="name" required/>
            </div>
            <div className="form__textbox">
              <textarea id="story" name="story" placeholder="질문을 작성하세요" required></textarea>
            </div>
          </div>
          <div className="form__submit">
            <input type="submit" value="submit"/>
          </div>
        </form>
      </section>
      <section className="discussion__wrapper">
        <ul className="discussions__container">
        {
          
        }
        </ul>
      </section>
    </main>
  );
}

export default App;
