import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthResponse} from "@/features/user/services/registerUser";

export interface LoginPayload {
    identifier: string;
    password: string;
}

export const loginUser = createAsyncThunk(
    'user/login',
    async (credentials: LoginPayload, {rejectWithValue}) => {
        try {
            const response = (await axios.post<AuthResponse>(`${process.env.STRAPI_URL}/api/auth/local`, credentials)).data;
            await localStorage.setItem("JWT", response.jwt);
            return response.user;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || 'Login failed');
        }
    }
);