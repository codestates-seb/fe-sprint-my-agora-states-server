const DiscussionList = ({data})=>{
  return(
    <section className="discussion__wrapper">
    <ul className="discussions__container">
      {
        data.map((list, idx) => {
          return (
            <li className="discussion__container" key={idx}>
            <div className="discussion__avatar--wrapper">
              <img className="discussion__avatar--image" src={list.avatarUrl}/>
            </div>
            <div className="discussion__content">
              <h2 className="discussion__title">
                <a href={list.url}>{list.title}</a>
                </h2>
                <div className="discussion__information">
                  <p>{list.author}</p>
                  <p>{String(list.createdAt).slice(0, 10)}</p>
                </div>
            </div>
            <div className="discussion__answered"><p>✔️</p>
            </div>
          </li>
          )
        })
      }
    </ul>
  </section>
  )
}

export default DiscussionList;