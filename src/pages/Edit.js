import './Create.css'
import { useState } from 'react'

function Edit({setEdit, editnum, data, setData}) {
	const newData = [...data].filter((e)=>{
		return editnum === e.id
 })[0]
	const nextData = [...data].filter((e)=>{
		return editnum >e.id
	})
	const beforeData = [...data].filter((e)=>{
		return editnum < e.id
	})
	const [title, setTitle] = useState(newData.title)
	const [content, setContent] = useState(newData.content)
	const [user, setUser] = useState(newData.username)
	// console.log(beforeData,'be')
	// console.log(nextData,'ne')
	// const editData = dataForEdit.map((e)=>{
	// 	if(e === editnum){
	// 		console.log(e)
	// 		return {
	// 			id:editnum,
	// 			username:'임시용',
	// 			title:title,
	// 			content:content,
	// 			createdAt:String(new Date())
	// 		}
	// 	}
	// 	else{
	// 		const newData = [...data].filter((e)=>{
	// 			return read === e.id
	// 	 })
	// 	}
		
	// })
	
		function handleTitle(e){
			setTitle(e.target.value)
		  }
		
		  function handleContent(e){
			setContent(e.target.value)
		  }
		  function handleUser(e){
			setUser(e.target.value)
		  } 
	  function undo(){
		setEdit(false,0)
	  }

	  function update(){
		// console.log('update')
		setData([...beforeData, {
			id:editnum,
			username:user,
			title:title,
			content:content,
			createdAt:String(new Date())
		} , ...nextData])
	  }

	return (
		<div className='CreateContent'>
		<input value = {user} onChange={handleUser}></input>
		<input value = {title} onChange={handleTitle}></input>
		<textarea value = {content} onChange={handleContent}></textarea>
		<div>
		  <button onClick={undo}>취소</button>
		  <button onClick={update}>저장</button>
		</div>
	  </div>
	)
}
export default Edit