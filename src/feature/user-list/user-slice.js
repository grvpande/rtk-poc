import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    usersList: [],
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUsers.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.usersList = action.payload;
                state.loading = false;
            }).addCase(getUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
            });
    },
});

export const getUsers = createAsyncThunk("users/fetch", async () => {
    const res = await fetch("https://fakestoreapi.com/users");
    const users = await res.json();
    return users;
});

export const { fetchUser } = userSlice.actions;

export default userSlice.reducer;
