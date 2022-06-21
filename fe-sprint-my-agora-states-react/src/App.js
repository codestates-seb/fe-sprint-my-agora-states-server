import React, { useState, useEffect } from 'react'
import Create from './pages/Create'
import Read from './pages/Read'
import Edit from './pages/Edit'
import ContentList from './pages/ContentList'
import './App.css'
import dummy from './resource/data'
<div>
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round"></link>
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"></link>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</div>
function App() {
	
  const [data, setData] = useState(dummy)
  const [create, setCreate] = useState(false)
  const [read, setRead] = useState(3)
  const [editnum, setEditnum] = useState(0)
  const [ id, setId] = useState(data.length)
  const [edit, setEdit] = useState(false)
  function creates(){
	  setRead(0)
	  setCreate(true)
	  setEdit(false)
  }
  function reads(el){
	  setRead(el)
	  setCreate(false)
	  setEdit(false)
  }
  function ids(el){
	  setId(el)
  }
  function delets(el){
	setRead(0)
	setData(el)
	setEdit(false)
  }

  function edits(el, el2){
	  setRead(0)
	  setEdit(el)
	setEditnum(el2)
}
  return (
	<div className='container'>
	  {/* 왼쪽 목록 */}
	  <section className='leftSection'>
	  <div className="table">
		<div className='table-title'>
		  <span>목록</span>
		  <button onClick={creates}>글쓰기</button>
		</div>
		<ContentList data = {data} setRead = {reads}/>
	  </div>
	  </section>
	<section className='rightSection'>
	  {/* 오른쪽 Create 컴포넌트 */}
	  {create === true ? <Create setRead = {reads} data = {data} setData = {delets} id = {id} setId={ids} />  : ''}
	  {read === 0 ? '' : (<Read  data = {data} read = {read} setData = {delets} setEdit = {edits} />)}
	  {edit === true ? (<Edit setEdit = {edits} editnum ={editnum} data = {data} setData = {delets}/>) : ''}
	  </section>
	</div>
  )
}

export default App