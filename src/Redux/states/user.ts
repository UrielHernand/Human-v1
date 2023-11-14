import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
    name: string;
    email: string;
    token: string;
}

export const userSlice = createSlice({
    name: 'user',
    initialState: {} as User,
    reducers: {
       createUser: (state, action: PayloadAction<User>) => {
            return action.payload;
        },
    },
});

export const {createUser} = userSlice.actions;
