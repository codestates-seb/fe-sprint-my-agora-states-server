import React from 'react'
import { useState, useEffect } from 'react'
import Discussion from './Discussion'
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import '../Stylesheets/Discussions.scss';

export default function Discussions() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataRequest = async() => {
      try{
        const receivedData = (await axios.get('http://localhost:4000/discussions')).data;
        setData(receivedData);
      } catch(err) {
        console.log('CANNOT GET, Error occured', err);
      }
    }
    dataRequest();
  }, []);

  return (
    <section className='discussions-wrapper'>
      <ul className='discussions-container'>
        {
          data.map((v) => {
            return <Discussion content={v} key={uuidv4()}/>
          })
        }
      </ul>

      <div className='discussions-buttons-container'>
        <button className='discussions-button btn btn-success'>move</button>
        <button className='discussions-button btn btn-success'>move</button>
        <button className='discussions-button btn btn-success'>move</button>
      </div>
    </section>
  )
}
