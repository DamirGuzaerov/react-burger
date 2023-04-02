import {createAsyncThunk} from "@reduxjs/toolkit";
import {request} from "../../utils/api";

export const login = createAsyncThunk(
    'auth/loginStatus',
    async (arg) => {
        return await request('api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "email": arg.email,
                "password": arg.password
            })
        })
    }
)

export const register = createAsyncThunk(
    'auth/registerStatus',
    async (arg) => {
        return await request('api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "email": arg.email,
                "password": arg.password,
                "name": arg.name
            })
        })
    }
)

export const getUser = createAsyncThunk(
    'user/getUserStatus',
    async () => {
        let token = localStorage.getItem("accessToken")
        return await request('api/auth/user', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${token}`
            }
        })
    }
)

