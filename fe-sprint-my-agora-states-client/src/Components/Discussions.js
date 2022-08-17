import React, { useEffect, useState } from 'react';
import Discussion from './Discussion';

const Discussions = () => {
    const [discussionList, setDiscussionList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/discussions/")
            .then(res => res.json())
            .then(json => setDiscussionList(json))
    }, [])
    return (
        <div>
            <ul>
                {discussionList.map((discussion) => {
                    return (
                        <Discussion discussion={discussion} key={discussion.id}/>
                    )
                })}
            </ul>
        </div>
    )
}

export default Discussions;