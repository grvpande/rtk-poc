import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    error: null,
    data: null
}

const userDetailSlice = createSlice({
    name: 'selectedUser',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(
            getSelectedUser.pending,
            (state) => {
                state.loading = true;
            }
        )
        .addCase(
            getSelectedUser.fulfilled,
            (state, action) => {
                state.data = action.payload;
            }
        );
    }
});

const getSelectedUser = createAsyncThunk("get/selectedUser", async (id) => {
    const res = await fetch(`https://fakestoreapi.com/users/${id}`);
    const user = await res.json();
    return user;
});

export default userDetailSlice.reducer;
