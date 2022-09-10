import { UserDiv, UserEmail, UserName, UserPhone, UserWebsite } from "./styled/user.styled"
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
            <UserEmail>{email}</UserEmail>
            <UserPhone>Tn: {phone}</UserPhone>
            <UserWebsite>Website: {website}</UserWebsite>
        </UserDiv>
    )
}

export default User;