import axios from "axios";

const getAllAgorastatesDatas = async () => {
    const options = {
        url:'http://localhost:4000/discussions'
    };
    const response = await axios(options);
    console.log(response.data)
    return response.data;
}

const getAgorastatesDataById = async ({id}) => {
    const options = {
        url:`http://localhost:4000/discussions/${id}`
    };
    const response = await axios(options);
    console.log(response.data);
    return response.data;
}

export { getAllAgorastatesDatas as default, getAgorastatesDataById };