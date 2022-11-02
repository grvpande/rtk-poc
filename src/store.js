import { configureStore } from '@reduxjs/toolkit';
import userSlice from './feature/user-list/user-slice';

const store = configureStore({
    reducer: {
        users: userSlice
    }
});
export default store;