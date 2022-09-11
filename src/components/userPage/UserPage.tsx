import { useParams } from "react-router-dom";
import { AddPostButton, UserDiv, UserName, UserPageDiv, UserPosts } from "./styled/userPage.styled";
import { useNavigate } from "react-router-dom";
import useToggle from "../../hooks/useToggle";
import CreatePost from "../modal/CreatePost";
import { useRef, useState, useEffect } from "react";
import UseClickOutside from "../../hooks/useClickOutside";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Post } from "../../types/Post";
import { fetchPosts } from "../../utilities/FetchData";
import { API_URL } from "../../constants/API_URL";
import UserPost from "./UserPost";

const UserPage: React.FC = () => {
    const [postCreating, setPostCreating] = useToggle(false);
    const [posts, setPosts] = useState<Post[]>([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const createPostRef = useRef<HTMLDivElement>(null);

    UseClickOutside(createPostRef, setPostCreating);

    useEffect(() => {
        fetchPosts(API_URL, 'posts', setPosts)
    }, [])

    const user = useSelector((state: RootState) => state.users.allUsers.find(user => {
        return user.id.toString() === id
    }));

    const userPosts = posts.filter(post => post.userId === user?.id)

    return (
        <UserPageDiv>
            <i onClick={() => navigate('/')} className="bi bi-arrow-left-square" />
            <UserDiv>
                <UserName>
                    {user?.name}
                </UserName>

                <UserPosts>
                    {userPosts.map(post => (
                        <UserPost key={post.id} post={post} posts={posts} setPosts={setPosts} />
                    ))}
                </UserPosts>
            </UserDiv>
            <AddPostButton onClick={setPostCreating}>Add post</AddPostButton>

            {postCreating && <CreatePost userId={user?.id} setPostCreating={setPostCreating} forwardRef={createPostRef} />}
        </UserPageDiv>

    )
}

export default UserPage;