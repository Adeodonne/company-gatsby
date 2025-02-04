import {User} from "@/features/user/types/user.types";
import {loginUser} from "@/features/user/services/loginUser";
import {registerUser} from "@/features/user/services/registerUser";
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    user: User | null;
}

const initialState: UserState = {
    user: null,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState['user']>) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.fulfilled, (state, action) => {
                state.user = action.payload;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload;
            })
    },
});

export const { setUser, clearUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
