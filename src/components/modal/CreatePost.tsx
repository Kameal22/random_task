import useInputState from "../../hooks/useInputState";
import { AddPostButton, ButtonsDiv, CancelButton, CreatePostDiv, PostContentsDiv, PostError, PostTitleDiv } from "./styled/createPost.styled"
import { postData } from "../../utilities/PostData";
import { API_URL } from "../../constants/API_URL";
import { Post } from "../../types/Post";
import { v4 as uuidv4 } from "uuid";

interface Props {
    forwardRef: React.RefObject<HTMLDivElement>;
    setPostCreating: () => void
    userId: number | undefined
    addPostToState: (post: Post) => void
}

const CreatePost: React.FC<Props> = ({ forwardRef, setPostCreating, userId, addPostToState }) => {
    const [, , postTitle, setPostTitle, titleError] = useInputState("");
    const [postContent, setPostContent, , , contentError, handleContentError] = useInputState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const post = { body: postContent, id: uuidv4(), title: postTitle, userId }

        if (!postContent.trim() || !postTitle.trim()) {
            handleContentError("Please provide title and content")
        } else {
            postData(API_URL, 'posts', postTitle, postContent, userId)
            addPostToState(post)
            setPostCreating()
        }
    }
    return (
        <CreatePostDiv ref={forwardRef}>
            <h1>Create post</h1>

            <form
                className="createWorkspaceForm"
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <PostTitleDiv>
                    <p>Enter title</p>
                    <input
                        value={postTitle}
                        placeholder="Post title"
                        onChange={setPostTitle}
                        type="text"
                        name="title"
                    />
                    {titleError && <PostError>{titleError}</PostError>}
                </PostTitleDiv>

                <PostContentsDiv>
                    <p>Enter post</p>
                    <textarea value={postContent} onChange={setPostContent} placeholder="Enter your post" />
                    {contentError && <PostError>{contentError}</PostError>}
                </PostContentsDiv>

                <ButtonsDiv>
                    <AddPostButton type="submit">Add post</AddPostButton>
                    <CancelButton type="reset" onClick={setPostCreating}>Cancel</CancelButton>
                </ButtonsDiv>
            </form>
        </CreatePostDiv>
    )
}

export default CreatePost