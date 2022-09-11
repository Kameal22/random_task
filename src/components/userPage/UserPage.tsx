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
    const [loading, setLoading] = useToggle(true)
    const [posts, setPosts] = useState<Post[]>([]);
    const { id } = useParams();
    const navigate = useNavigate();

    const createPostRef = useRef<HTMLDivElement>(null);

    UseClickOutside(createPostRef, setPostCreating);

    useEffect(() => {
        fetchPosts(API_URL, 'posts', setPosts, setLoading)
    }, [])

    const addPostToState = (post: Post) => {
        setPosts(prev => [...prev, post])
    }

    const user = useSelector((state: RootState) => state.users.allUsers).slice(0, 8).find(user => {
        return user.id.toString() === id
    });

    const userPosts = posts.filter(post => post.userId === user?.id)

    return (
        <UserPageDiv>
            <i onClick={() => navigate('/')} className="bi bi-arrow-left-square" />
            <UserDiv>
                {loading && <h1>Loading</h1>}
                <UserName>
                    {user?.name}
                </UserName>

                <UserPosts>
                    {userPosts.map(post => (
                        <UserPost userId={id} key={post.id} post={post} posts={posts} setPosts={setPosts} />
                    ))}
                </UserPosts>
            </UserDiv>
            <AddPostButton onClick={setPostCreating}>Add post</AddPostButton>

            {postCreating && <CreatePost addPostToState={addPostToState} userId={user?.id} setPostCreating={setPostCreating} forwardRef={createPostRef} />}
        </UserPageDiv>

    )
}

export default UserPage;