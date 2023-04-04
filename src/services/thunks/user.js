import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchWithRefresh, request} from "../../utils/api";

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
        return await fetchWithRefresh('api/auth/user', {
            method: 'GET',
            headers: {
                authorization: `Bearer ${token}`
            }
        })
    }
)

export const editUser = createAsyncThunk(
    'user/editUserStatus',
    async ({email,name,password}) => {
        let token = localStorage.getItem("accessToken")
        return await fetchWithRefresh('api/auth/user', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
                authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
                email: email,
                name: name,
                password: password
            })
        })
    }
)

export const logout = createAsyncThunk(
    'auth/logoutStatus',
    async () => {
        let token = localStorage.getItem("refreshToken")
        return await request('api/auth/logout', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                token: token,
            })
        })
    }
)

