import {useState} from 'react'
import noticedata from './noticedata'
import NoticeList from './NoticeList'


const Notice = ()=>{
  const [notice, setData] = useState(noticedata);
  return(
    <div className="slider-container">
      <button className="left-btn">〈</button>
      <section className="notice-container">
        <div className="notice-hidden">
          {
            notice.map((data, idx) => <NoticeList key={idx} data={data}/>)
          }
        </div>
      </section>
      
      <button className="right-btn">〉</button>
    </div>
  )
}

export default Notice;