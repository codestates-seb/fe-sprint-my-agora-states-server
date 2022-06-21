import React, { useEffect, useState } from "react";
import Modal from "../components/Modal";
import { UseFetch } from "../hooks/UseFetch";
import Card from "../components/Card";
import { useInView } from 'react-intersection-observer';

const Main = ({linkPath}) => {
    const [isModal, setIsModal] = useState(false);
    const [data, setData] = useState([]);
    const [ref, inView] = useInView();
    const [page, setPage] = useState(20);
    
    const callData = UseFetch(`http://localhost:3010/discussions${linkPath}?limit=${page}`);
    useEffect(() => {
        window.onbeforeunload = () => {
            window.scrollTo(0, 0);
        }
    },[]);

    useEffect(() => {
        const dataArr = async () => {
            const datalist = await callData();
            setData(datalist);
        }
        dataArr();
    }, [page]);

    useEffect(() => {
        if(inView) {
            console.log('inView!!!');
            setPage(prev => prev + 20);
        }
    }, [inView]);

    const handleAddBtnClick = () => {
        setIsModal(true);
    };

    const timeFormat = (time) => {
        let newFormat = '';
        const matcher = /[0-2][0-9]:[0-5][0-9]:[0-5][0-9]/g;
        if(time.match(matcher)) {
          const matchTime = time.match(matcher)[0].split(':');
          matchTime[0] >= 12 ? newFormat += '오후' : newFormat += '오전';
          matchTime[0] > 12 ? newFormat += ` ${matchTime[0] - 12}:` : newFormat += ` ${matchTime[0]}:`;
          newFormat += `${matchTime[1]}:${matchTime[2]}`;
        }else {
          newFormat = time;
        }
        return newFormat;
      };

    return (
        <section className="discussion__wrapper">
            <div className="discussion__btn-wrapper">
                <button className="add-btn" onClick={handleAddBtnClick}>
                    <span>+</span>
                </button>
            </div>
                {
                    isModal ? <Modal modalState={setIsModal} datalist={data} setFunc={setData} /> : null
                }
            <ul className="discussions__container">
                {
                    data.map((v, i) => 
                        data.length - 1 === i 
                            ? <li className="discussion__container" key={v.id} ref={ref}>
                                <Card setFunc={setData} imgUrl={v.avatarUrl} linkUrl={v.url} title={v.title} author={v.author} createdAt={timeFormat(v.createdAt)} id={v.id} ref={ref} />
                              </li>
                            : <li className="discussion__container" key={v.id}>
                                <Card setFunc={setData} imgUrl={v.avatarUrl} linkUrl={v.url} title={v.title} author={v.author} createdAt={timeFormat(v.createdAt)} id={v.id} />
                              </li>
                    )
                }
            </ul>
        </section>
    );
};

export default Main;