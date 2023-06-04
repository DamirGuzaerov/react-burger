import reducer, {initialState} from './password'
import {getPasswordResetCode, resetPassword} from "../../thunks/password/password";
import {AnyAction} from "redux";

describe('Redux password reducer', () => {
		it('should set initial state by default', function () {
				const state = reducer(undefined, {} as AnyAction);
				expect(state).toEqual({...initialState});
		});

		it('should set password reset code succeed true when getPasswordResetCode is fulfilled', function () {
				const action = {type: getPasswordResetCode.fulfilled.type};
				const state = reducer(initialState, action);

				expect(state).toEqual({...initialState, passwordResetCodeSucceed: true});
		});

		it('should set password reset code requested true when getPasswordResetCode is pending', function () {
				const action = {type: getPasswordResetCode.pending.type};
				const state = reducer(initialState, action);

				expect(state).toEqual({...initialState, passwordResetCodeRequested: true});
		});

		it('should set password reset code failed true when getPasswordResetCode is rejected', function () {
				const action = {type: getPasswordResetCode.rejected.type};
				const state = reducer(initialState, action);

				expect(state).toEqual({...initialState, passwordResetCodeFailed: true});
		});

		it('should set password code succeed true when resetPassword is fulfilled', function () {
				const action = {type: resetPassword.fulfilled.type};
				const state = reducer(initialState, action);

				expect(state).toEqual({...initialState, passwordResetSucceed: true});
		});

		it('should set password code requested true when resetPassword is pending', function () {
				const action = {type: resetPassword.pending.type};
				const state = reducer(initialState, action);

				expect(state).toEqual({...initialState, passwordResetRequested: true});
		});

		it('should set password reset failed true when resetPassword is rejected', function () {
				const action = {type: resetPassword.rejected.type};
				const state = reducer(initialState, action);

				expect(state).toEqual({...initialState, passwordResetFailed: true});
		});
})