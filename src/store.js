import { configureStore } from '@reduxjs/toolkit';
import userReducer from './feature/user-list/user-slice';
import selectedUserReducer from './feature/user-detail/user-detail-slice'

const store = configureStore({
    reducer: {
        users: userReducer,
        selectedUser: selectedUserReducer
    }
});

export default store;