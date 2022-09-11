import useToggle from "../../hooks/useToggle";
import { Post } from "../../types/Post";
import { UserPostsDiv } from "./styled/userPosts.styled";
import DeletePost from "../modal/DeletePost";
import { useRef } from "react";
import UseClickOutside from "../../hooks/useClickOutside";

interface Props {
    post: Post
    posts: Post[]
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>
}

const UserPost: React.FC<Props> = ({ post, posts, setPosts }) => {
    const [postDeleting, setPostDeleting] = useToggle(false);

    const deletePostRef = useRef<HTMLDivElement>(null);

    UseClickOutside(deletePostRef, setPostDeleting);

    const removePost = (id: string) => {
        const removed = posts.filter(post => post.id !== id);

        setPosts(removed);
    }

    return (
        <UserPostsDiv>
            <button onClick={setPostDeleting}>x</button>
            <p>{post.title.slice(0, 50)}</p>

            {postDeleting && <DeletePost forwardRef={deletePostRef} postId={post.id} setPostDeleting={setPostDeleting} removePost={removePost} />}
        </UserPostsDiv>
    )
}

export default UserPost;