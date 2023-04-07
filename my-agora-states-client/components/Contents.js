import React  from 'react';

function Contents({content}){

    const AddAnswer = (content) => {
        return(
            <div className='answer exit'>
                <div className='answer__isAnswer--wrapper'>
                    <div>
                        <img src='https://as2.ftcdn.net/v2/jpg/05/28/00/07/1000_F_528000768_Ro4XI3y2bwJD9Jr2W3Ic5oQ6IvubKhRu.webp' width='12px'/>
                    </div>
                </div>
                <div className='answer__avatar--wrapper'>
                    <img src={content.content.avatarUrl} alt={`avatar of ${content.content.author}`} className='answer__avatar--image'/>
                </div>
                <a className='answer__link' href={`${content.content.url}`}>
                    <div className='answer__content' dangerouslySetInnerHTML={{__html:content.content.bodyHTML}}></div>
                </a>
            </div>
        )
    }
    return(
        <li className="discussion__container">
            <div className="discussion__avatar--wrapper">
                <img className="discussion__avatar--image"
                src={content.avatarUrl}
                alt={`avatar of ${content.author}`}/>
            </div>
            <div className="discussion__content">
                <h2 className="discussion__title"><a href={content.url}>{content.title}</a></h2>
                <div className="discussion__information">{`${content.author} / ${content.createdAt}`}</div>
            </div>
            <div className="discussion__answered">
                {(content.answer === null) ? 
                    <img src="https://cdn-icons-png.flaticon.com/512/3247/3247297.png" width='17px'/>
                    : <img src='https://cdn-icons-png.flaticon.com/512/6325/6325553.png' width='20px'/>
                }
            </div>
            {(content.answer === null) ? 
                <></>
                : <AddAnswer content={content.answer}/>
            }
        </li>
    )
}

export default Contents