function Login(){


    return (
    <section className="form__container">
      <form action="" method="get" class="form">
        <div className ="form__input--wrapper">
          <div className ="form__input--name">
            <label for="name">Enter your name: </label>
            <input type="text" name="name" id="name" required></input>
          </div>
          <div className ="form__input--title">
            <label for="name">Enter your title: </label>
            <input type="text" name="name" id="name" required></input>
          </div>
          <div className ="form__textbox">
            <label for="story">Your question: </label>
            <textarea id="story" name="story" placeholder="질문을 작성하세요" required></textarea>
          </div>
        </div>
        <div className ="form__submit">
          <input type="submit" value="submit"></input>
        </div>  
      </form>
    </section>
    );
}
export default Login;