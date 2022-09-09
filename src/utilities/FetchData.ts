import axios from "axios";
import { User } from "../types/User";

export const fetchUsers = async (URL: string, data: string, setUsers: (user: User) => void) => {
    const response = await axios.get(`${URL}${data}`);

    response.data.forEach((user: User) => {
        setUsers(user)
    })
};