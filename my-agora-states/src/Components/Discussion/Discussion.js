import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import './Discussion.css';
import { DiscussionPage } from '../../Pages/DiscussionPage/DiscussionPage';

export const Discussion = (props) => {
  return (
    <div className='discussion-container'>
      <div className='discussion_avatar'>
        <img src={props.avatar} alt={props.author} />
      </div>
      <div className='discussion_title'>
        <Link to={`/discussion/${props.id}`}>{props.title}</Link>
      </div>
      <div className='discussion_author'>
        {props.author}
      </div>
      <div className='discussion_date'>
        {new Date(props.createdAt).toLocaleString()}
      </div>
      <div className='discussion_checkbox'>
        {props.answer ? <FontAwesomeIcon icon={faCircleCheck} /> : <FontAwesomeIcon icon={faCircle} />}
      </div>
    </div>
  );
};
