import useToggle from "../../hooks/useToggle";
import { Post } from "../../types/Post";
import { UserPostsDiv } from "./styled/userPosts.styled";
import DeletePost from "../modal/DeletePost";
import { useRef } from "react";
import UseClickOutside from "../../hooks/useClickOutside";
import { useNavigate } from "react-router-dom";
import { deleteData } from "../../utilities/DeleteData";
import { API_URL } from "../../constants/API_URL";

interface Props {
    post: Post
    posts: Post[]
    userId: string | undefined
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>
}

const UserPost: React.FC<Props> = ({ post, posts, setPosts, userId }) => {
    const [postDeleting, setPostDeleting] = useToggle(false);
    const navigate = useNavigate();

    const deletePostRef = useRef<HTMLDivElement>(null);

    UseClickOutside(deletePostRef, setPostDeleting);

    const removePost = (id: string) => {
        const removed = posts.filter(post => post.id !== id);

        setPosts(removed);
        deleteData(post.id)
    }

    return (
        <UserPostsDiv>
            <button onClick={setPostDeleting}>x</button>
            <p onClick={() => navigate(`/users/${userId}/${post.id}`)}>{post.title.slice(0, 50)}</p>

            {postDeleting && <DeletePost forwardRef={deletePostRef} postId={post.id} setPostDeleting={setPostDeleting} removePost={removePost} />}
        </UserPostsDiv>
    )
}

export default UserPost;