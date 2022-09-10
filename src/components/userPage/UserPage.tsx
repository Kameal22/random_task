import { useParams } from "react-router-dom";
import { UserDiv, UserPageDiv } from "./styled/userPage.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const UserPage: React.FC = () => {
    const { id } = useParams();

    const user = useSelector((state: RootState) => state.users.allUsers.find(user => {
        return user.id.toString() === id
    }));

    return (
        <UserPageDiv>
            <UserDiv>
                <h1>{user?.name}</h1>
            </UserDiv>
        </UserPageDiv>

    )
}

export default UserPage;