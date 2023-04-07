const maakeRandomImage = () => {
  const randomNum = Math.floor(Math.random() * 1000000);
  return `https://avatars.githubusercontent.com/u/${randomNum}`;
};

export default function getServer(url, method, data = {}) {
  if (method.toLowerCase() === "get") {
    return fetch(url)
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });
  } else if (method.toLowerCase() === "post") {
    const sendData = { ...data, avatarUrl: maakeRandomImage() };
    return fetch(url, {
      body: JSON.stringify(sendData),
      method,
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }
}
