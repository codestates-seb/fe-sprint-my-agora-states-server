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

export const postDiscussion = async (payload) => {
  // console.log(payload);
  try {
    const res = await axios(`${url}/discussions`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: payload,
    });
    return res.data;
  } catch (err) {
    return "No Data";
  }
};
