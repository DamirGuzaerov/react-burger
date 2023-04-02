import {createSlice} from "@reduxjs/toolkit";
import {getPasswordResetCode, resetPassword} from "../thunks/password";

const initialState = {
    passwordResetCodeRequested: false,
    passwordResetCodeSucceed: false,
    passwordResetCodeFailed: false,

    passwordResetRequested: false,
    passwordResetSucceed: false,
    passwordResetFailed: false,
};

export const passwordSlice = createSlice({
    name: 'password',
    initialState,
    reducers: {
        setResetCode: (state, action) => {
            state.resetCode = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getPasswordResetCode.fulfilled, () => {
                return {...initialState, passwordResetCodeSucceed: true}
            })
            .addCase(getPasswordResetCode.pending, () => {
                return {...initialState, passwordResetCodeRequested: true}
            })
            .addCase(getPasswordResetCode.rejected, () => {
                return {...initialState, passwordResetCodeFailed: true}
            })
            .addCase(resetPassword.fulfilled, () => {
                return {...initialState, passwordResetSucceed: true}
            })
            .addCase(resetPassword.pending, () => {
                return {...initialState, passwordResetRequested: true}
            })
            .addCase(resetPassword.rejected, () => {
                return {...initialState, passwordResetFailed: true}
            })

    },
});

export default passwordSlice.reducer;