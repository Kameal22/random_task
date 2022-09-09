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

        },
    }
});

export const { fetchUsers } = usersSlice.actions;

export default usersSlice.reducer;