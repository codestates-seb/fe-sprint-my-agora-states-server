import { useEffect, useRef, useState } from "react";
import MainRightLI from "./MainRightLI";
import ListNum from "./ListNum";

const MainRight = ({ text }) => {

    const [agoraData, setAgoraData] = useState(JSON.parse(localStorage.getItem('agora')))
    const target = useRef()
    let num = Array(Math.ceil(agoraData.length / 9)).fill(1).map((x, i) => x + i)
    const pageScroll = (x) => {
        target.current?.scrollTo({ left: 0, top: x, behavior: "smooth" });
    }
    const submitBtn = document.querySelector('#submitBtn')
    submitBtn?.addEventListener('click', () => {
        setAgoraData([text, ...agoraData])
    });
    useEffect(() => {

    }, [agoraData])

    return <div id="main_right">
        <div >
            <ul ref={target}>
                {agoraData.map(x => <MainRightLI data={x} />)}
            </ul>
        </div>
        <div id="num_list">
            {num.map(x => <ListNum listNum={x} pageScroll={pageScroll} />)}
        </div>
    </div>
}

export default MainRight;