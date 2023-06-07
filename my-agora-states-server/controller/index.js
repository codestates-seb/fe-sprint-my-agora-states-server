const { agoraStatesDiscussions } = require("../repository/discussions");
const discussionsData = agoraStatesDiscussions;

const discussionsController = {
	findAll: (req, res) => {
		// TODO: 모든 discussions 목록을 응답합니다.
		return res.status(200).json(discussionsData);
	},

	findById: (req, res) => {
		// TODO: 요청으로 들어온 id와 일치하는 discussion을 응답합니다.
		const { id } = req.params;
		const discussion = discussionsData.find((discussion) => {
			return discussion.id === Number(id);
		});
		if (discussion) {
			const { id, title, url, author, bodyHTML, avatarUrl } = discussion;
			return res.status(200).json(discussion);
		} else {
			return res.status(404).json({ message: "Discussion not found" });
		}

		// // 반환값 -> 요청 매개면수에 id와 데이터에 id가 일치하는 객체를 요소로 갖는 배열
		// const filteredData = discussionsData.filter((obj) => {
		// 	// 필터를 쓰되 더 쉬운방법
		// 	obj.id === Number(id);
		// });

		// // 배열의 길이가 0이 아니면 존재 / 0 이면 리소스에 해당 id를 가진 데이터 없음
		// let isIdExisted = filteredData.length !== 0 ? true : false;

		// //  filteredData는 배열.... 요소 돌리기
		// // FIXME :
		// /* const data = {
		// 	id: filteredData.id,
		// 	title: filteredData.title,
		// 	url: filteredData.url,
		// 	author: filteredData.author,
		// 	bodyHTML: filteredData.bodyHTML,
		// 	avatarUrl: filteredData.avatarUrl,
		// }; */

		// return isIdExisted
		// 	? res.status(200).send(filteredData)
		// 	: res
		// 			.status(404)
		// 			.send(
		// 				"😹 조회하려는 정보는 존재하지 않습니다 ID를 다시 확인해주세요"
		// 			);
	},
	/*
			만약 URI에 전달된 매개변수(req.params)가 
			리소스에 존재한다면 
			res.status(200).send(id가 일치하는 데이터)를 반환 
		
			만약 URI에 전달된 매개변수(req.params)가 리소스에 존재하지 않는다면 res.status(404).send("😹조회하려는 정보는 존재하지 않습니다 ID를 다시 확인해주세요")를 반환
			
			<qsuedo code>

			if(존재 === true){
				return res.status(200).send(id가 일치하는 데이터);
			} else {
				return res.status(404).send("😹조회하려는 정보는 존재하지 않습니다 ID를 다시 확인해주세요");
			}
		*/
};
/*  
✕ discussionsData에 해당 id와 일치하는 데이터가 존재하는 경우, 상태 코드 200과 함께 응답을 보냅니다.
✕ discussionsData 중 해당 id와 일치하는 discussion을 응답으로 보냅니다.

✓ discussionsData에 해당 id와 일치하는 데이터가 존재하지 않는 경우, 상태 코드 404와 함께 응답을 보냅니다.
*/
module.exports = {
	discussionsController,
};
