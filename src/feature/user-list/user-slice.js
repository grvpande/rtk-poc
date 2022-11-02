import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loading: false,
    error: null,
    user: []
}

const userSlice = createSlice({
    "name": "user",
    initialState,
    reducers: {
        fetchUser(state,action) {
            state.loading = true;
        }
    }
});

export const {fetchUser} = userSlice.actions;

export default userSlice.reducer;