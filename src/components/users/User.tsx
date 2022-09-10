import { UserDiv, UserName, UserData } from "./styled/user.styled"
import { useNavigate } from "react-router-dom";

interface Props {
    name: string;
    email: string;
    phone: string;
    website: string;
    id: number;
}

const User: React.FC<Props> = ({ name, phone, email, website, id }) => {
    const navigate = useNavigate();

    return (
        <UserDiv onClick={() => navigate(`/users/${id}`)}>
            <UserName>{name}</UserName>
            <i className="bi bi-person" />
            <UserData>{email}</UserData>
            <UserData><span style={{ fontWeight: "bold" }}>Tn:</span> {phone}</UserData>
            <UserData><span style={{ fontWeight: "bold" }}>Website:</span> {website}</UserData>
        </UserDiv>
    )
}

export default User;