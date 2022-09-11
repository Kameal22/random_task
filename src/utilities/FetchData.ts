import axios from "axios";
import { Post } from "../types/Post";
import { User } from "../types/User";
import { Comment } from "../types/Comment";

export const fetchUsers = async (URL: string, data: string, setUsers: (user: User) => void, setLoading: () => void) => {
    const response = await axios.get(`${URL}${data}`);

    response.data.forEach((user: User) => {
        setUsers(user)
    })

    setLoading();
};

export const fetchPosts = async (URL: string, data: string, setPosts: React.Dispatch<React.SetStateAction<Post[]>>, setLoading: () => void) => {
    const response = await axios.get(`${URL}${data}`);

    setPosts(response.data)
    setLoading();
};

export const fetchSinglePosts = async (URL: string, data: string, id: string | undefined, setPost: React.Dispatch<React.SetStateAction<Post | undefined>>, setLoading: () => void) => {
    const response = await axios.get(`${URL}${data}/${id}`);

    setPost(response.data)
    setLoading()
};

export const fetchComments = async (URL: string, data: string, id: string | undefined, moreData: string, setComments: React.Dispatch<React.SetStateAction<Comment[]>>) => {
    const response = await axios.get(`${URL}${data}/${id}/${moreData}`);

    setComments(response.data)
};