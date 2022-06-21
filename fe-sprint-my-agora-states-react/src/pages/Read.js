import React, { useState } from 'react'
import './Read.css'

function Read({data, read, setData, setEdit}) {
		const newData = [...data].filter((e)=>{
				return read === e.id
		 })[0]
		const deletData = [...data].filter((e)=>{
				return read !== e.id
		 })
		const delets = function(){
				setData(deletData)
		}
		const edits = function(){
				setEdit(true, newData.id)
		}

	return (
		<div className="read_edit">	
			<div className='ReadContent'>
				<div>{newData.title}</div>
				<p>{newData.content}</p>
				<div>
					<button onClick={edits}>수정</button>
					<button onClick={delets}>삭제</button>
				</div>
			</div>
		</div>
	)
}

export default Read