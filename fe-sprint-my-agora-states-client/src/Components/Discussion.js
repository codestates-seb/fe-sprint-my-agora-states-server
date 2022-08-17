import React from 'react';

const Discussion = ({ discussion }) => {
    return (
        <li className='discussion__container' key={discussion.id}>
            <div className='discussion__avatar--wrapper'>
                <img className='discussion__avatar--image' src={discussion.avatarUrl} alt={`avatar of ${discussion.author}`} />
            </div>
            <div className='discussion__content'>
                <h2 className='discussion__title'><a href={discussion.url}>{discussion.title}</a></h2>
                <div className='discussion__information'>{`${discussion.author} / ${new Date(discussion.createdAt).toLocaleString()}`}</div>
            </div>
            <div className='discussion__answered'>
                <p style={{color: discussion.answer ? 'green' : 'red'}} className='discussion__isanswered'>{discussion.answer ? 'O' : 'X'}</p>
            </div>
        </li>
    )
}

export default Discussion;