import axios from "axios";
import { User } from "../types/User";

export const fetchUsers = async (URL: string, data: string, setUsers: (user: User) => void) => {
    const response = await axios.get(`${URL}${data}`);

    response.data.forEach((user: User) => {
        setUsers(user)
    })
};

export const fetchPosts = async (URL: string, data: string, userId: string) => {
    const response = await axios.get(`${URL}${data}/${userId}/posts`);

    console.log(response.data)
};