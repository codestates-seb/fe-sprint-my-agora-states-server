import Discussion from "./Discussion";
import { faCaretRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
const Discussions = ({discussions, deleteDisucssion, noticeDiscussions, otherDiscussions}) => {
    const [noticeIsOpen, setNoticeIsOpen] = useState(true);
    const [othersIsOpen, setOthersIsOpen] = useState(true);
    const handleNoticeToggle = () =>{
        setNoticeIsOpen(!noticeIsOpen);
    }
    const handleOthersToggle = () =>{
        setOthersIsOpen(!othersIsOpen);
    }
 
    return(
        <section className="discussion__wrapper">
            <div className="notice_discussion_wrapper">
                <div className="notice_discussion_container">
                    <button className="toggle" onClick={handleNoticeToggle}>
                        {noticeIsOpen ? 
                            <FontAwesomeIcon icon={faCaretRight} />
                            : <FontAwesomeIcon icon={faCaretDown} />
                        }
                    </button>
                    
                    <h2>Notice ({noticeDiscussions.length})</h2>
                </div>
                { noticeIsOpen ?
                    <ul className="notice_discussions__container">
                    {noticeDiscussions.map((discussion) => {
                        return <Discussion key={discussion.id} discussion={discussion} deleteDiscussion={deleteDisucssion} />
                    })}
                </ul> : ''
                }
                
            </div>
           
            <div className="others_discussion_wrapper">
                <div className="others_discussion_container">
                    <button className="toggle" onClick={handleOthersToggle}>
                        {othersIsOpen ? 
                            <FontAwesomeIcon icon={faCaretRight} />
                            : <FontAwesomeIcon icon={faCaretDown} />
                        }
                    </button>
                    <h2>Discussions ({otherDiscussions.length})</h2>
                </div>
                { othersIsOpen ?
                    <ul className="others_discussions__container">
                    {otherDiscussions.map((discussion) => {
                        return <Discussion key={discussion.id} discussion={discussion} deleteDiscussion={deleteDisucssion} />
                    })}
                </ul> : ''
                }
                
            </div>
           
            
        </section>
    );
};
export default Discussions;