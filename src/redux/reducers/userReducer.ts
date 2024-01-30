import { createReducer } from '@reduxjs/toolkit';
import { addUser, editUser, deleteUser } from '../actions/userActions';
import { User } from '@/interfaces/User';

const initialState: User[] = [
    {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        profilePicture: 'https://randomuser.me/api/portraits/lego/1.jpg',
        bio: 'Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.',
        password: '123456',
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        profilePicture: 'https://randomuser.me/api/portraits/lego/2.jpg',
        bio: 'Consectetur adipiscing elit.',
        password: '123456',
    },
    {
        id: 3,
        name: 'Alice Johnson AliceAlice Johnson',
        email: 'alice@example.com',
        profilePicture: 'https://randomuser.me/api/portraits/lego/3.jpg',
        bio: 'Sed do eiusmod tempor incididunt.',
        password: '123456',
    },
    {
        id: 4,
        name: 'Bob Brown',
        email: 'bob@example.com',
        profilePicture: 'https://randomuser.me/api/portraits/lego/4.jpg',
        bio: 'Ut labore et dolore magna aliqua.',
        password: '123456',
    },
    {
        id: 5,
        name: 'Eva Green',
        email: 'eva@example.com',
        profilePicture: 'https://randomuser.me/api/portraits/lego/5.jpg',
        bio: 'Ut enim ad minim veniam.',
        password: '123456',
    }
    /* ,
    {
        id: 6,
        name: 'Michael Johnson',
        email: 'michael@example.com',
        profilePicture: 'https://randomuser.me/api/portraits/lego/6.jpg',
        bio: 'Quis nostrud exercitation ullamco laboris.',
        password: '123456',
    },
    {
        id: 7,
        name: 'Sarah White',
        email: 'sarah@example.com',
        profilePicture: 'https://randomuser.me/api/portraits/lego/7.jpg',
        bio: 'Duis aute irure dolor in reprehenderit.',
        password: '123456',
    } */
];

const userReducer = createReducer(initialState, builder => {
    builder
        .addCase(addUser, (state, action) => {
            state.push(action.payload);
        })
        .addCase(editUser, (state, action) => {
            const index = state.findIndex(user => user.id === action.payload.id);
            console.log(index);
            if (index !== -1) {
                state[index] = action.payload;
            }
        })
        .addCase(deleteUser, (state, action) => {
            return state.filter(user => user.id !== action.payload);
        });
});

export default userReducer;
