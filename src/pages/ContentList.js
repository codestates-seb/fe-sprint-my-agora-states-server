import React from 'react'
import './ContentList.css'


function ContentList({data, setRead}) {
	return (
		<div>
		<div className="row">
			{/* data의 번호 */}
			<div className="col col1">번호</div>
			{/* data의 제목 */}
			<div className="col col2">작성자</div>
			<div className="col col3">제목</div>
			{/* data의 작성일자 */}
			<div className="col col4">날짜</div>
		</div>
		{data.map(({id, username, title, content, createdAt}) =>{
			return(
				<div className="row">
				<div className="col col1">{id}</div>
				<div className="col col2">{username}</div>
				<div className="col col3">
					<a href="" onClick={(event) => {
						event.preventDefault();
						setRead(id)
						}}>
					{title}
					</a>
					</div>
				<div className="col col4">{createdAt}</div>
			</div>
			)
		})}
		</div>
		
	)
}

export default ContentList