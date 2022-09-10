import useInputState from "../../hooks/useInputState";
import { CreatePostDiv, PostContentsDiv, PostTitleDiv } from "./styled/createPost.styled"

interface Props {
    forwardRef: React.RefObject<HTMLDivElement>;
}

const CreatePost: React.FC<Props> = ({ forwardRef }) => {
    const [, , postTitle, setPostTitle, error, handleError, reset] = useInputState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
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
                </PostTitleDiv>

                <PostContentsDiv>
                    <p>Enter post</p>
                    <textarea placeholder="Enter your post" />
                </PostContentsDiv>
            </form>
        </CreatePostDiv>
    )
}

export default CreatePost