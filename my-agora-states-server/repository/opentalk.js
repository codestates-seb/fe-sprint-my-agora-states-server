const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

module.exports.opentalk= [
    {
        date: "2023-06-06T14:06:13.916Z",
        id: 0, 
        roomname:"새로운",
        text:"새로운 채팅방이 생성되었습니다.",
        username: "시스템",
    }
]