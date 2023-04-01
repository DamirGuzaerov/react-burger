import {createAsyncThunk} from "@reduxjs/toolkit";
import {request} from "../../utils/api";

export const login = createAsyncThunk(
    'login/loginStatus',
    async (arg) => {
        let {email, password} = arg.form
        return await request('api/auth/login', {
            method: 'POST',
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
    }
)

export const getUser = createAsyncThunk(
    'user/getUserStatus',
    async (arg) => {
        let {email, password} = arg.form
        return await request('api/auth/user', {
            method: 'POST',
            headers: {
                'Authorization': localStorage.getItem("access-token")
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            })
        })
    }
)


