import { Post } from "../../types/Post";
import { UserPostsDiv } from "./styled/userPosts.styled";

interface Props {
    post: Post
    removePost: (id: string) => void
}

const UserPost: React.FC<Props> = ({ post, removePost }) => {
    return (
        <UserPostsDiv>
            <button onClick={() => removePost(post.id)}>x</button>
            <p>{post.title.slice(0, 50)}</p>
        </UserPostsDiv>
    )
}

export default UserPost;