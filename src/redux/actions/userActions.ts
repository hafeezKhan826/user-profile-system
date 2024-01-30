import { createAction } from '@reduxjs/toolkit';
import { User } from '@/interfaces/User';

export const addUser = createAction<User>('user/add');
export const editUser = createAction<User>('user/edit');
export const deleteUser = createAction<number>('user/delete');
