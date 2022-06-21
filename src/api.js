import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://localhost:3001",
});

export const getAllList = async () => {
  try {
    const response = await apiClient.get("/discussions");
    return response.data;
  } catch (err) {
    return err;
  }
};

export const getContent = async () => {
  try {
    const response = await apiClient.get("/discussions/:id");
    return response;
  } catch (err) {
    return err;
  }
};

export const writeContent = async (data) => {
  try {
    const response = await apiClient.post("/discussions", data);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const updateContent = async (data) => {
  try {
    const response = await apiClient.put("/discussions/:id", data);
    return response.data;
  } catch (err) {
    return err;
  }
};

export const removeContent = async () => {
  try {
    const response = await apiClient.delete("/discussions/:id");
    return response;
  } catch (err) {
    return err;
  }
};
