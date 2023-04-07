export default function filterAgoraStatesData(agoraStatesData, filterCategory) {
  if (filterCategory.category === '답변완료') {
    return agoraStatesData.filter((data) => data.answer !== null);
  }

  if (filterCategory.category === '미답변') {
    return agoraStatesData.filter((data) => data.answer === null);
  }

  return agoraStatesData;
}

//const categories = ['모든 질문', '답변완료', '미답변'];
