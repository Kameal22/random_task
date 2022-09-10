import useInputState from "../../hooks/useInputState";
import { AddPostButton, ButtonsDiv, CancelButton, CreatePostDiv, PostContentsDiv, PostError, PostTitleDiv } from "./styled/createPost.styled"

interface Props {
    forwardRef: React.RefObject<HTMLDivElement>;
    setPostCreating: () => void
}

const CreatePost: React.FC<Props> = ({ forwardRef, setPostCreating }) => {
    const [, , postTitle, setPostTitle, titleError, handleTitleError, resetError] = useInputState("");
    const [postContent, setPostContent, , , contentError, handleContentError] = useInputState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!postContent || !postTitle) {
            handleContentError("Please provide title and content")
        } else {
            console.log(postTitle)
            console.log(postContent)
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