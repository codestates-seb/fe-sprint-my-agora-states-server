import React from 'react';
import './TweetsDisplay.css'
import { useEffect, useState } from "react";
import TweetToWrite from '../components/TweetToWrite'
import TweetList from '../components/TweetList';


function TweetsDisplay() {
    const domain = 'http://localhost:3001'
    const [discussions, setDiscussions] = useState([]);
  
    useEffect(() => {
      getDiscussion();
    }, [])
  
    const getDiscussion = (() => {

      return fetch((domain + '/discussions'))
      .then((res) => res.json())
      .then((data) => {
        setDiscussions(data)
      })
    })
  
    const addDiscussion = ({ title, author, bodyText }) => {
      // let newDate = new Date();
      let newDiscussion = {
        id: "",
        // createdAt: new Date().toLocaleString('ko-KR').slice(-11),
        createdAt: "",
        title: title,
        url: "https://github.com/codestates-seb/agora-states-fe/discussions",
        author: author,
        answer: null,
        bodyHTML: bodyText,
        avatarUrl:
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
      };

      fetch(domain + '/discussions/', { 
        method: 'POST', 
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(newDiscussion) })
      .then((res) => {
        if (res.status === 201) {
          getDiscussion()
        }
      })
    }
  
    const deleteDiscussion = ((id) => {
      fetch(domain + `/discussions/${id}`, { 
          method: 'DELETE', 
        })
      .then((res) => {
        if (res.status === 202 || 204) {
          getDiscussion()
        }
      })
    })   
    
    return (
        <div className='tweetdisplay'>
            <div className='tweettowrite'>
                <TweetToWrite  addDiscussion={addDiscussion}/>
            </div>
            <div className='tweetlist'>
                <ul>
                 <TweetList discussions={discussions} deleteDiscussion={deleteDiscussion}/>
                 </ul>
            </div>
        </div>
    )
}

export default TweetsDisplay;