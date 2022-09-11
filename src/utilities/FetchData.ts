import axios from "axios";
import { Post } from "../types/Post";
import { User } from "../types/User";

export const fetchUsers = async (URL: string, data: string, setUsers: (user: User) => void) => {
    const response = await axios.get(`${URL}${data}`);

    setUsers(response.data)
};

export const fetchPosts = async (URL: string, data: string, setPosts: React.Dispatch<React.SetStateAction<Post[]>>) => {
    const response = await axios.get(`${URL}${data}`);

    setPosts(response.data)
};