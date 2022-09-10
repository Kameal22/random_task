import { User as UserType } from "../../types/User";
import { UsersDiv } from "./styled/users.styled";
import User from "./User";

interface Props {
    users: UserType[]
}

const Users: React.FC<Props> = ({ users }) => {
    return (
        <UsersDiv>
            {users.map(user => (
                <User key={user.id} id={user.id} name={user.name} phone={user.phone} email={user.email} website={user.website} />
            ))}
        </UsersDiv>
    )
}

export default Users;