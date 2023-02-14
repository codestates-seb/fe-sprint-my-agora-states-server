const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

module.exports.agoraStatesDiscussions = [
    {
    id: 4,
    username: 'JUBEE',
    picture: `https://i.imgur.com/Adka0G5.png`,
    content:
      '오늘 마트에서 파는 2만원 짜리 케이크 사왔는데 크리스마스때 산 5만원짜리 케이크랑 맛이 똑같았다. 갬성값 3만원이면 싼것인가 비싼것인가...',
    createdAt: '23.01.29',
    like : 0,
  },
  {
    id: 3,
    username: '익명의누군가1',
    picture: `https://i.imgur.com/BPjEVta.png`,
    content:
      '아이콘 테스트용 포스트. 냉무',
    createdAt: '23.01.27',
    like : 0,
  },
  {
    id: 2,
    username: '익명의누군가2',
    picture: `https://i.imgur.com/JMsBQqH.png`,
    content:
      '아이콘은 Free Userpice Pack 에서 무료로 다운받았습니다. 프리소스 만세! 제작자님 사랑해요 ',
    createdAt: '23.01.26',
    like : 0,
  },
  {
    id: 1,
    username: '익명의누군가3',
    picture: `https://i.imgur.com/GBIyZf5.png`,
    content:
      '수고했어 오늘도',
    createdAt: '23.01.24',
    like : 0,
  },
  {
    id: 0,
    username: '익명의누군가2',
    picture: `https://i.imgur.com/JMsBQqH.png`,
    content:
      'test',
    createdAt: '23.01.24',
    like : 0,
  },
].map(discussion => {
  if (discussion.answer) {
    return {
      ...discussion,
      bodyHTML: DOMPurify.sanitize(discussion.bodyHTML),
      answer: {
        ...discussion.answer,
        bodyHTML: DOMPurify.sanitize(discussion.answer.bodyHTML)
      }
    }
  }

  return {
    ...discussion,
    bodyHTML: DOMPurify.sanitize(discussion.bodyHTML)
  }
})