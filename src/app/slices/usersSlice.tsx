import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types/User";

interface allUsers {
    allUsers: User[]
}

const initialState: allUsers = {
    allUsers: []
}

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        fetchUsers: (state, action: PayloadAction<User>) => {
            state.allUsers.push(action.payload);
        },
    }
});

export const { fetchUsers } = usersSlice.actions;

export default usersSlice.reducer;