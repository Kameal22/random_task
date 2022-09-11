import { fetchUsers } from "../../utilities/FetchData";
import { API_URL } from "../../constants/API_URL";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers as fetchData } from "../../app/slices/usersSlice";
import { User } from "../../types/User";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { HomePageDiv } from "./styled/homePage.styled";
import Users from "../users/Users";
import useToggle from "../../hooks/useToggle";

const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const users = useSelector((state: RootState) => state.users.allUsers).slice(0, 8);
    const [loading, setLoading] = useToggle(true)

    const setUsers = (user: User) => {
        dispatch(fetchData(user))
    }

    useEffect(() => {
        fetchUsers(API_URL, 'users', setUsers, setLoading)
    }, [])

    return (
        <HomePageDiv>
            {loading && <h1>Loading</h1>}
            <Users users={users} />
        </HomePageDiv>
    )
}

export default HomePage;