
const MyDiscussion = (props) => {

    return (
        <ul class="discussions__container">
        <li class="discussion__container" id="notice">
          <div class="discussion__avatar--wrapper">
            <img class="discussion__avatar--image"
              src={props.imgSrc}
              alt={`avatar of ${props.author}`}/>
          </div>
          <div class="discussion__content">
            <h2 class="discussion__title"><a href={props.url} id = "notice">[notice] 좋은 질문하는 법</a></h2>
            <div class="discussion__information">
                {`${props.author} / ${props.date}`}
            </div>
          </div>
          <div class="discussion__answered"><i class="fa-solid fa-check-double" id="notice"></i></div>
        </li>
      </ul>
    )
}

export default MyDiscussion;