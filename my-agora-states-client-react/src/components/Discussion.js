import { faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Discussion = ({discussion, deleteDiscussion, notice}) => {
    const { id, url, author, avatarUrl, title, createdAt, answer } = discussion;

    const setTime = (value) => {
        //value 는 시간으로 들어옴
        let now = new Date();
        //  toLocalString() //2023. 3. 10. 오후 3:08:56
         if(value.getFullYear() === now.getFullYear() &&
            value.getMonth() === now.getMonth() &&
            value.getDate() === now.getDate()){
           //오늘인 경우
           const diff = now.getTime() - value.getTime();
       
           const diffMSec = Math.floor( diff / ( 1000 ));
          if(diffMSec >= 0 && diffMSec <= 60){
            return `${diffMSec}초 전`;
          }else{
            const diffMin = Math.floor(diff / (60 * 1000));
            if(diffMin > 0 && diffMin < 60){
              return `${diffMin}분 전`;
            }else{
              const diffHour = Math.floor(diff  / (60 * 60 * 1000));
              return `${diffHour}시간 전`;
            }
          }
         
        }else{//오늘이 아닌 경우
          const diffMSec = now.getTime() - value.getTime();
          const diffDate = Math.floor(diffMSec / (24 * 60 * 60 * 1000));
          if(diffDate > 0 && diffDate <= 7){
            return `${diffDate} 일 전`;
          }else{
            return `${value.toLocaleString().slice(0,11)}`;
          }
        }
      };
      
    return(
        <li className="discussion__container">
          <div className="discussion__container__div">
            <div className="user_info_section">
              <div className="discussion__avatar--wrapper">
                <img 
                    className="discussion__avatar--image"
                    src={avatarUrl}
                    alt={`avatar of ${author}`}
                />      
              </div>
              <div className="discussion__information">
                <p className="authorName">{author}</p>
                <p>|</p>
                <p className="timeDif">{setTime(new Date(createdAt))}</p>
              </div>

            </div>
            {/* <div className="discussion__content"> */}
            <div className="discussion_section">
              <h2 className="discussion__title">
                <a href={url}>{title}</a>
              </h2>
              {/* <div className="discussion__information">{`${author} / ${new Date(createdAt).toLocaleTimeString()}`}</div> */}

              <div className="discussion__answered">
                {/* <p onClick={() => deleteDiscussion(id)}>{answer ? "☑" : "☒"}</p> */}
                { !notice ?
                <>
                  <button onClick={() => deleteDiscussion(id)}>
                  <FontAwesomeIcon icon={faComment} />
                  </button>
                  <span>{answer === null || answer === undefined? 0 : Object.keys(answer).length}</span>
                </>
                   : '' }
              </div>
            </div>
          </div>
              
               
        </li>
    );
};
export default Discussion;