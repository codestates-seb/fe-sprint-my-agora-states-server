import { forwardRef } from "react";
import { useState } from "react";
import { UseRequest } from "../hooks/UseRequest";

const Card = forwardRef(({isAnswer, imgUrl, linkUrl, title, author, createdAt, id, setFunc}) => {
    const [isHover, setIsHover] = useState(false);
    
    const handleHoverEvent = () => {
        setIsHover(true);
    };

    const handleOutEvent = () => {
        setIsHover(false);
    };

    const deleteRequest = UseRequest(`http://localhost:3010/discussions/${id}`,'', 'DELETE');
    
    const handleDeleteClick = async (e) => {
        setFunc(await deleteRequest());
    };

    return (
        <div className="discussion__wrapper--div" onMouseOver={handleHoverEvent} onMouseOut={handleOutEvent}>
            <div className="discussion__avatar--wrapper">
                <img className="discussion__avatar--image" src={imgUrl} alt="avatar" />
            </div>
            <div className="discussion__delete">
                <button onClick={handleDeleteClick} className={isHover ? "discussion__delete--btn" : "discussion__delete--btn hide"}>delete</button>
            </div>
            <div className="discussion__content">
                <h2 className="discussion__title">
                    <a href={linkUrl} target='_blank' rel="noopener noreferrer">{title}</a>
                </h2>
            </div>
            <div className="discussion__answered">
                <div className="discussion__information">
                    {author} / {createdAt}
                </div>
                <p className="discussion__answered">
                    {
                        isAnswer ? '☑' : 'X'
                    }
                </p>
            </div>
        </div>
    );
});

export default Card;