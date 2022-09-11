import { CommentContent, CommentDiv, CommentEmail, CommentName, CommentsDiv, GoBack, PostContent, PostDiv, ShowComments } from "./styled/post.styled"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchSinglePosts, fetchComments } from "../../utilities/FetchData";
import { API_URL } from "../../constants/API_URL";
import { Post as singlePost } from "../../types/Post";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { User } from "../../types/User";
import { useNavigate } from "react-router-dom";
import { Comment } from "../../types/Comment";
import useToggle from "../../hooks/useToggle";

const Post: React.FC = () => {
    const [post, setPost] = useState<singlePost>()
    const [user, setUser] = useState<User>()
    const [postComments, setPostComments] = useState<Comment[]>([]);
    const [showComments, setShowComments] = useToggle(false);
    const [loading, setLoading] = useToggle(true)
    const { post_id } = useParams();
    const navigate = useNavigate();

    const users = useSelector((state: RootState) => state.users.allUsers).slice(0, 8)

    useEffect(() => {
        fetchSinglePosts(API_URL, 'posts', post_id, setPost, setLoading)
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
            fetchComments(API_URL, 'posts', post.id, 'comments', setPostComments)
        }
    }, [post])
    if (post === undefined) {
        return (
            <PostDiv>
                <h1>This post isn't available in database</h1>
                <GoBack onClick={() => navigate(-1)}>Back</GoBack>
            </PostDiv>
        )
    } else {
        return (
            <PostDiv>
                <h1>{user?.name}</h1>
                <PostContent>
                    <h2>{post?.title}</h2>

                    <p>{post?.body}</p>

                    <ShowComments onClick={setShowComments}>Show comments</ShowComments>

                    {showComments &&
                        <CommentsDiv>
                            {postComments.map(comment => (
                                <CommentDiv key={comment.id}>
                                    <div>
                                        <CommentEmail>{comment.email}</CommentEmail>
                                        <CommentName>{comment.name}</CommentName>
                                    </div>
                                    <CommentContent>{comment.body}</CommentContent>
                                </CommentDiv>
                            ))}
                        </CommentsDiv>
                    }

                </PostContent>
                <GoBack onClick={() => navigate(-1)}>Back</GoBack>
            </PostDiv>
        )
    }
}

export default Post