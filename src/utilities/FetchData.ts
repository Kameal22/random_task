import axios from "axios";
import { Post } from "../types/Post";
import { User } from "../types/User";

export const fetchUsers = async (URL: string, data: string, setUsers: (user: User) => void) => {
    const response = await axios.get(`${URL}${data}`);

    response.data.forEach((user: User) => {
        setUsers(user)
    })
};

export const fetchPosts = async (URL: string, data: string, setPosts: React.Dispatch<React.SetStateAction<Post[]>>) => {
    const response = await axios.get(`${URL}${data}`);

    setPosts(response.data)
};

export const fetchSinglePosts = async (URL: string, data: string, id: string | undefined, setPost: React.Dispatch<React.SetStateAction<Post | undefined>>) => {
    const response = await axios.get(`${URL}${data}/${id}`);

    setPost(response.data)
};

export const fetchComments = async (URL: string, data: string, id: string | undefined, moreData: string) => {
    const response = await axios.get(`${URL}${data}/${id}/${moreData}`);

    console.log(response.data)
};