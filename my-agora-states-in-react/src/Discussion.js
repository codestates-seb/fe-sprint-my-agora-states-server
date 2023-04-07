
const Discussion = ({data})=>{

  return(
    <li className="discussion__container">
      <div className="discussion__avatar--wrapper">
        <img className="discussion__avatar--image" src={data.avatarUrl}/>
      </div>
      <div className="discussion__content">
        <h2 className="discussion__title">
          <a href="https://github.com/codestates-seb/agora-states-fe/discussions/45">{data.title}</a>
          </h2>
          <div className="discussion__information">
            <p>dubipy</p>
            <p>2022-05-16</p>
            <p className="hide">D_kwDOHOApLM4APjJi</p>
          </div>
      </div>
      <div className="discussion__answered"><p>✔️</p>
      </div>
    </li>
  )
}

export default Discussion;