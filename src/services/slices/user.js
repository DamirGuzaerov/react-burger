import {createSlice} from "@reduxjs/toolkit";
import {getUser, login} from "../thunks/user";

const initialState = {
    user: null,
    isAuthChecked: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                localStorage.setItem('access-token',action.payload.accessToken.split(" ")[1]);
                localStorage.setItem('refresh-token',action.payload.refreshToken);

                state.user = action.payload.user;
                state.isAuthChecked = true
            })
            .addCase(getUser.fulfilled, (state,action) => {
                console.log(action.payload)
                state.user = action.payload.user;
            })
    },
});

export default userSlice.reducer;