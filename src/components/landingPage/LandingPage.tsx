import { fetchUsers } from "../../utilities/FetchData";
import { API_URL } from "../../constants/API_URL";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers as fetchData } from "../../app/slices/usersSlice";
import { User } from "../../types/User";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const LandingPage: React.FC = () => {
    const dispatch = useDispatch();

    const users = useSelector((state: RootState) => state.users.allUsers);

    const setUsers = (user: User) => {
        dispatch(fetchData(user))
    }

    useEffect(() => {
        fetchUsers(API_URL, 'users', setUsers)
    }, [])

    return (
        <div>
            <h1 onClick={() => console.log(users)}>Landing Page</h1>
        </div>
    )
}

export default LandingPage;