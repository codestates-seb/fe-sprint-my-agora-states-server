import React, { useState } from 'react'
import './Create.css'

function Create({setRead, data, setData, id, setId}) {
  const [user, setUser] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  function add(){
    setRead(0)
    setId(id+1)
    const newData = [{
      id:id+1,
      username:user,
      title:title,
      content:content,
      createdAt:String(new Date())
  }, ...data]
    setData(newData)
  }

  function undo(){
    setRead(0)
  }

  function handleUser(e){
    setUser(e.target.value)
    // console.log(user)
  }

  function handleTitle(e){
    setTitle(e.target.value)
    // console.log(title)
  }

  function handleContent(e){
    setContent(e.target.value)
    // console.log(content)
  }
  return (
    <div className='CreateContent'>
      <input value = {user} onChange={handleUser}></input>
      <input value = {title} onChange={handleTitle}></input>
      <textarea value = {content} onChange={handleContent}></textarea>
      <div>
        <button onClick={undo}>취소</button>
        <button onClick={add}>저장</button>
      </div>
    </div>
  )
}

export default Create