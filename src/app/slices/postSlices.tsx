import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Post } from "../../types/Post";

interface allPosts {
    allPosts: Post[]
}

const initialState: allPosts = {
    allPosts: []
}

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        fetchUsersPosts: (state, action: PayloadAction<Post>) => {
            state.allPosts.push(action.payload);
        },
        removePost: (state, action: PayloadAction<{ id: string }>) => {
            const removed = state.allPosts.filter(post => post.id !== action.payload.id);

            state.allPosts = removed
        },
    }
});

export const { fetchUsersPosts, removePost } = postsSlice.actions;

export default postsSlice.reducer;