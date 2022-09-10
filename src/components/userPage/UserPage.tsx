import { useParams } from "react-router-dom";
import { AddPostButton, UserDiv, UserName, UserPageDiv } from "./styled/userPage.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useNavigate } from "react-router-dom";
import useToggle from "../../hooks/useToggle";
import CreatePost from "../modal/CreatePost";
import { useRef } from "react";
import UseClickOutside from "../../hooks/useClickOutside";

const UserPage: React.FC = () => {
    const [postCreating, setPostCreating] = useToggle(false);
    const { id } = useParams();
    const navigate = useNavigate();

    const createPostRef = useRef<HTMLDivElement>(null);

    UseClickOutside(createPostRef, setPostCreating);

    const user = useSelector((state: RootState) => state.users.allUsers.find(user => {
        return user.id.toString() === id
    }));

    return (
        <UserPageDiv>
            <i onClick={() => navigate('/')} className="bi bi-arrow-left-square" />
            <UserDiv>
                <UserName>
                    {user?.name}
                </UserName>
            </UserDiv>
            <AddPostButton onClick={setPostCreating}>Add post</AddPostButton>

            {postCreating && <CreatePost setPostCreating={setPostCreating} forwardRef={createPostRef} />}
        </UserPageDiv>

    )
}

export default UserPage;