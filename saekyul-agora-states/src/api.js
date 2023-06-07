function fetchData() {
  fetch("http://localhost:4000/discussions")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("데이터를 가져오는 중 오류가 발생했습니다.", error);
    });
}

export default fetchData;
