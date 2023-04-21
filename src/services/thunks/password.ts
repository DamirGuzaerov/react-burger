import {createAsyncThunk} from "@reduxjs/toolkit";
import {request} from "../../utils/api";

export const getPasswordResetCode = createAsyncThunk(
		'password/getPasswordResetCodeStatus',
		async (email: string) => {
				return await request('api/password-reset', {
						method: 'POST',
						headers: {
								'Content-Type': 'application/json;charset=utf-8'
						},
						body: JSON.stringify({
								email: email
						})
				})
		}
)

export const resetPassword = createAsyncThunk(
		'password/resetPasswordStatus',
		async ({password, code}: { password: string, code: string }) => {
				return await request('api/password-reset/reset', {
						method: 'POST',
						headers: {
								'Content-Type': 'application/json;charset=utf-8'
						},
						body: JSON.stringify({
								password: password,
								token: code
						})
				})
		}
)

