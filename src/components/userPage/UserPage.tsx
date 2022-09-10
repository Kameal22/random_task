import { useParams } from "react-router-dom";
import { AddPostButton, UserDiv, UserName, UserPageDiv } from "./styled/userPage.styled";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useNavigate } from "react-router-dom";
import useToggle from "../../hooks/useToggle";
import CreatePost from "../modal/CreatePost";
import { useRef, useState, useEffect } from "react";
import UseClickOutside from "../../hooks/useClickOutside";
import UserPosts from "./UserPosts";
import { API_URL } from "../../constants/API_URL";
import { fetchPosts } from "../../utilities/FetchData";
import { Post } from "../../types/Post";

const UserPage: React.FC = () => {
    const [postCreating, setPostCreating] = useToggle(false);
    const [posts, setPosts] = useState<Post[]>([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const createPostRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (id)
            fetchPosts(API_URL, 'users', id)
    }, [])

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

                <UserPosts />
            </UserDiv>
            <AddPostButton onClick={setPostCreating}>Add post</AddPostButton>

            {postCreating && <CreatePost setPostCreating={setPostCreating} forwardRef={createPostRef} />}
        </UserPageDiv>

    )
}

export default UserPage;