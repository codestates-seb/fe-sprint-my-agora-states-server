export default function Discussion() {

    return (
    <section className ="discussion__wrapper">
      <ul className ="discussions__container">
        <li className ="discussion__container">
          <div className ="discussion__avatar--wrapper">
            <img className ="discussion__avatar--image"
              src="https://mblogthumb-phinf.pstatic.net/20150403_86/e2voo_14280514283502gas9_JPEG/kakako-00.jpg?type=w2"
              alt="avatar of kimploo" />
          </div>
          <div className ="discussion__content">
            <h2 className ="discussion__title">
              <a href="https://github.com/codestates-seb/agora-states-fe/discussions/6">[notice] 좋은 질문하는 법</a>
              </h2>
            <div className ="discussion__information">kimploo / 2022. 04. 22. 오후2:08:33</div>
          </div>
          <div className ="discussion__answered">
            <p>☑</p>
          </div>
        </li>
      </ul>
    </section>
    )
}