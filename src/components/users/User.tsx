import { UserDiv, UserEmail, UserName, UserPhone, UserWebsite } from "./styled/user.styled"

interface Props {
    name: string;
    email: string;
    phone: string;
    website: string;
}

const User: React.FC<Props> = ({ name, phone, email, website }) => {
    return (
        <UserDiv>
            <UserName>{name}</UserName>
            <UserEmail>{email}</UserEmail>
            <UserPhone>Tn: {phone}</UserPhone>
            <UserWebsite>Website: {website}</UserWebsite>
        </UserDiv>
    )
}

export default User;