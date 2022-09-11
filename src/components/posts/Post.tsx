import { GoBack, PostContent, PostDiv, ShowComments } from "./styled/post.styled"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSinglePosts, fetchComments } from "../../utilities/FetchData";
import { API_URL } from "../../constants/API_URL";
import { Post as singlePost } from "../../types/Post";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { User } from "../../types/User";
import { useNavigate } from "react-router-dom";

const Post: React.FC = () => {
    const [post, setPost] = useState<singlePost>()
    const [user, setUser] = useState<User>()
    const { post_id } = useParams();
    const navigate = useNavigate();

    const users = useSelector((state: RootState) => state.users.allUsers).slice(0, 8)

    useEffect(() => {
        fetchSinglePosts(API_URL, 'posts', post_id, setPost)
    }, [])

    useEffect(() => {
        if (post) {
            const shownUser = users.find(user => (
                user.id === post.userId
            ));
            setUser(shownUser)
        }
    }, [post])

    useEffect(() => {
        if (post) {
            fetchComments(API_URL, 'posts', post.id, 'comments')
        }
    }, [post])
    return (
        <PostDiv>
            <h1>{user?.name}</h1>
            <PostContent>
                <h2>{post?.title}</h2>

                <p>{post?.body}</p>

                <ShowComments>Show comments</ShowComments>
            </PostContent>
            <GoBack onClick={() => navigate(-1)}>Back</GoBack>
        </PostDiv>
    )
}

export default Post