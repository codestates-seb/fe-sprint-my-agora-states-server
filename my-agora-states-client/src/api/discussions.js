import axios from "axios";

const url = "http://localhost:4000";

export const getDiscussion = async () => {
  try {
    const res = await axios(`${url}/discussions`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    // console.log(res.data);
    return res.data;
  } catch (err) {
    return alert(err);
  }
};
