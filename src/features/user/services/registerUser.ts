import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {User} from "@/features/user/types/user.types";

export interface RegisterPayload {
    username: string;
    email: string;
    password: string;
}

export interface AuthResponse {
    user: User;
    jwt: string;
}

export const registerUser = createAsyncThunk(
    'user/register',
    async (userData: RegisterPayload, {rejectWithValue}) => {
        try {
            const response = (await axios.post<AuthResponse>(process.env.STRAPI_URL + '/api/auth/local/register', userData)).data;
            await localStorage.setItem("JWT", response.jwt)
            return response.user;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || 'Registration failed');
        }
    }
);
