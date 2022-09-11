import { PostDiv } from "./styled/post.styled"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSinglePosts } from "../../utilities/FetchData";
import { API_URL } from "../../constants/API_URL";
import { Post as singlePost } from "../../types/Post";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Post: React.FC = () => {
    const [post, setPost] = useState<singlePost>()
    const { post_id } = useParams();

    useEffect(() => {
        fetchSinglePosts(API_URL, 'posts', post_id, setPost)
    }, [])

    const user = useSelector((state: RootState) => state.users.allUsers.find(user => {
        return user.id.toString() === post_id
    }));
    return (
        <PostDiv>
            <h1>YOUR  {post_id}</h1>
        </PostDiv>
    )
}

export default Post