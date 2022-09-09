import axios from "axios";

export const fetchUsers = async (URL: string, data: string) => {
    const response = await axios.get(`${URL}${data}`);
    
    console.log(response.data);
};