import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchWithRefresh, request} from "../../utils/api";
import {IUser} from "../../utils/types";

export const login = createAsyncThunk(
		'auth/loginStatus',
		async (arg: IUser) => {
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
		async (arg: IUser) => {
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
		async ({email, name, password}: IUser) => {
				let token = localStorage.getItem("accessToken")
				const requestBody = {email, name, password}
				Object.keys(requestBody).forEach(key => (requestBody[key as keyof typeof requestBody] ?? '') === '' && delete requestBody[key as keyof typeof requestBody])
				return await fetchWithRefresh('api/auth/user', {
						method: 'PATCH',
						headers: {
								'Content-Type': 'application/json;charset=utf-8',
								authorization: `Bearer ${token}`
						},
						body: JSON.stringify({
								...requestBody
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

