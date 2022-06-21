const DiscussionItem = ({data})=>{

    
    return (
        <li className="discussion__container" id={data.id}>
        <div className="discussion__avatar--wrapper">
          <img className="discussion__avatar--image"
            src={data.avatarUrl}
            alt="avatar" />
        </div>
        <div className="discussion__content">
          <h2 className="discussion__title"><a href={data.url}>{data.title}</a></h2>
          <pre className="discussion__story">{data.userQ}</pre>
          <div className="discussion__information">{data.author} / {data.createdAt}</div>

        </div>
        <div className="discussion__answered"><input type="checkbox" /></div>
      </li>
    )

}

export default DiscussionItem;