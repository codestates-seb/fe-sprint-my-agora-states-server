import React, { useEffect, useState } from 'react';
import TitleBar from '../components/TitleBar';
import AgoraStatesList from '../components/AgoraStatesList';
import Footer from '../components/Footer';
import getAllAgorastatesDatas, { getAgorastatesDataById } from '../services/agoraStatesService';
import styles from './Home.module.css'
import SearchBar from '../components/SearchBar';

const Home = () => {
    let [keyword, setKeyword] = useState('');
    let [agorastatesDatas, setAgorastatesDatas] = useState([]);
    let [isLoaded, setIsLoaded] = useState(false);

    const 전체목록새로고침 = async () => {
        setIsLoaded(false);
        const response = await getAllAgorastatesDatas();
        setAgorastatesDatas(response);
        setIsLoaded(true);
    }

    const id로검색하기 = async () => {
        if(keyword===''){
            전체목록새로고침();
        } else if(isNaN(Number(keyword))){
            alert('id는 숫자입니다!');
        } else{
            setIsLoaded(false);
            const response = await getAgorastatesDataById(keyword);
            setAgorastatesDatas(response);
            setIsLoaded(true);
        }
    }

    useEffect(()=>{
        전체목록새로고침();
    },[])

    return (
        <section className={styles.home}>
            <TitleBar/>
            <SearchBar keyword={keyword}/>
            {
               !isLoaded
                ? <div>로딩즁</div>
                : <AgoraStatesList agorastatesDatas={agorastatesDatas}/>
            }
            <Footer/>
        </section>
    );
};

export default Home;