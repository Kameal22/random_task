import useInputState from "../../hooks/useInputState";
import { AddPostButton, ButtonsDiv, CancelButton, CreatePostDiv, PostContentsDiv, PostError, PostTitleDiv } from "./styled/createPost.styled"

interface Props {
    forwardRef: React.RefObject<HTMLDivElement>;
    setPostCreating: () => void
}

const CreatePost: React.FC<Props> = ({ forwardRef, setPostCreating }) => {
    const [, , postTitle, setPostTitle, titleError, handleTitleError, resetError] = useInputState("");
    const [postContent, setPostContent, , , , , resetPost] = useInputState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!titleError && postContent) {
            console.log("essa")
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
                        placeholder="Post title"
                        onChange={setPostTitle}
                        type="text"
                        name="title"
                    />
                    {titleError && <PostError>{titleError}</PostError>}
                </PostTitleDiv>

                <PostContentsDiv>
                    <p>Enter post</p>
                    <textarea placeholder="Enter your post" />
                </PostContentsDiv>

                <ButtonsDiv>
                    <AddPostButton type="submit">Add post</AddPostButton>
                    <CancelButton onClick={setPostCreating}>Cancel</CancelButton>
                </ButtonsDiv>
            </form>
        </CreatePostDiv>
    )
}

export default CreatePost