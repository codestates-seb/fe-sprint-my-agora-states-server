import Header from '../component/Header';
import Discussions from './Discussions';
import Form from '../component/Form';
import '../etc/style.css';
import { useState, useEffect } from 'react';
import { getDiscussionData } from '../etc/DataApi';

const Main = () => {
    const [discussionData, setDiscussionsData] = useState([]);
    useEffect(() => {
        getDiscussionData().then((result) => {
            setDiscussionsData(result);
        });
    }, [discussionData]);

    const handleSubmit = (newData) => {
        setDiscussionsData([newData, ...discussionData]);
    }

    return (
        <main>
            <Header />
            <Form  handleSubmit={handleSubmit}/>
            <Discussions discussionData={discussionData}/>
        </main>


    )
}
export default Main;