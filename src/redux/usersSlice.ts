// usersSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { User } from '@/interfaces/User';

interface UsersState {
    users: User[];
}

const initialState: UsersState = {
    users: [],
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser(state, action: PayloadAction<User>) {
            state.users.push(action.payload);
        },
        editUser(state, action: PayloadAction<{ id: number; updatedUser: Partial<User> }>) {
            const { id, updatedUser } = action.payload;
            const index = state.users.findIndex(user => user.id === id);
            if (index !== -1) {
                state.users[index] = { ...state.users[index], ...updatedUser };
            }
        },
        deleteUser(state, action: PayloadAction<{ id: number }>) {
            console.log('ckiek', action.payload);
            const { id } = action.payload;
            state.users = state.users.filter(user => user.id !== id);
        },
    },
});

export const { addUser, editUser, deleteUser } = usersSlice.actions;
export const selectUsers = (state: RootState) => state.users;
export default usersSlice.reducer;
