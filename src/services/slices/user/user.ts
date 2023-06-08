import {createSlice} from "@reduxjs/toolkit";
import {editUser, getUser, login, logout, register} from "../../thunks/user/user";
import {IUser} from "../../../utils/types";

interface IUserSlice {
		user: IUser | null,
		isAuthChecked: boolean

		loginRequested: boolean
		loginSucceed: boolean
		loginFailed: boolean
		loginError: string | null

		registerRequested: boolean
		registerSucceed: boolean
		registerFailed: boolean
		registerError: string | null
}

export const initialState: IUserSlice = {
		user: null,
		isAuthChecked: false,

		loginRequested: false,
		loginSucceed: false,
		loginFailed: false,

		registerRequested: false,
		registerSucceed: false,
		registerFailed: false,

		loginError: null,
		registerError: null
};

export const userSlice = createSlice({
		name: 'user',
		initialState,
		reducers: {},
		extraReducers: (builder) => {
				builder
						.addCase(login.fulfilled, (state, action) => {
								localStorage.setItem('accessToken', action.payload.accessToken.split(" ")[1]);
								localStorage.setItem('refreshToken', action.payload.refreshToken);

								state.loginRequested = false
								state.loginSucceed = true
								state.loginFailed = false

								state.user = action.payload.user;
								state.isAuthChecked = true
						})
						.addCase(login.rejected, (state, action) => {
								state.loginRequested = false
								state.loginSucceed = false
								state.loginFailed = true

								state.loginError = action.error.message as string
						})
						.addCase(register.fulfilled, (state, action) => {
								localStorage.setItem('accessToken', action.payload.accessToken.split(" ")[1]);
								localStorage.setItem('refreshToken', action.payload.refreshToken);

								state.registerRequested = false
								state.registerSucceed = true
								state.registerFailed = false

								state.user = action.payload.user;
								state.isAuthChecked = true
						})
						.addCase(register.rejected, (state, action) => {
								state.registerRequested = false
								state.registerSucceed = false
								state.registerFailed = true

								state.registerError = action.error.message as string
						})
						.addCase(getUser.fulfilled, (state, action) => {
								state.user = action.payload.user;
								state.isAuthChecked = true;
						})
						.addCase(getUser.rejected, (state) => {
								state.isAuthChecked = true;
						})
						.addCase(editUser.fulfilled, (state, action) => {
								state.user = action.payload.user;
						})
						.addCase(logout.fulfilled, (state) => {
								localStorage.clear()
								state.user = initialState.user
						})
		},
});

export default userSlice.reducer;