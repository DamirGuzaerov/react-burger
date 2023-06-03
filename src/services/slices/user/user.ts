import {createSlice} from "@reduxjs/toolkit";
import {editUser, getUser, login, logout, register} from "../../thunks/user/user";
import {IUser} from "../../../utils/types";

interface IUserSlice {
		user: IUser | null,
		isAuthChecked: boolean
}

const initialState: IUserSlice = {
		user: null,
		isAuthChecked: false,
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

								state.user = action.payload.user;
								state.isAuthChecked = true
						})
						.addCase(register.fulfilled, (state, action) => {
								localStorage.setItem('accessToken', action.payload.accessToken.split(" ")[1]);
								localStorage.setItem('refreshToken', action.payload.refreshToken);
								state.user = action.payload.user;
								state.isAuthChecked = true
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