const NoticeList = ({data})=>{
  const {title, avatarUrl} = data;
  return (
    <a className="notice-box" href="https://github.com/codestates-seb/agora-states-fe/discussions/6">
      <div className="notice__title">
        <h3>[Notice]</h3>
        <h4>{title}</h4>
      </div>
      <div className="profile-total-container">
        <div className="profile-container">
          <img className="profile-image" src={avatarUrl}/>
        </div>
        <p className="user-name">kimploo</p>
      </div>
    </a>
  )
}

export default NoticeList