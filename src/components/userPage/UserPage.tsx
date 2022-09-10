import { useParams } from "react-router-dom";
import { UserDiv, UserPageDiv } from "./styled/userPage.styled";

const UserPage: React.FC = () => {
    const { id } = useParams();

    return (
        <UserPageDiv>
            <UserDiv>
                <h1>User with {id} id</h1>
            </UserDiv>
        </UserPageDiv>

    )
}

export default UserPage;