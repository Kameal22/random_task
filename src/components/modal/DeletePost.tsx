import { DeletePostDiv, DeleteButton, CancelButton } from "./styled/deletePost.styled"

interface Props {
    removePost: (id: string) => void
    setPostDeleting: () => void
    postId: string
    forwardRef: React.RefObject<HTMLDivElement>;
}

const DeletePost: React.FC<Props> = ({ removePost, setPostDeleting, postId, forwardRef }) => {
    return (
        <DeletePostDiv ref={forwardRef}>
            <h3>Are You sure?</h3>

            <div>
                <DeleteButton onClick={() => removePost(postId)}>Delete</DeleteButton>
                <CancelButton onClick={setPostDeleting}>Cancel</CancelButton>
            </div>
        </DeletePostDiv>
    )
}

export default DeletePost