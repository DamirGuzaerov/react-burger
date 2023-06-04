import reducer, {initialState} from './user'
import {editUser, getUser, login, logout, register} from "../../thunks/user/user";
import {AnyAction} from "redux";

describe('Redux user reducer', () => {
		it('should set initial state by default', function () {
				const state = reducer(undefined, {} as AnyAction);
				expect(state).toEqual({...initialState});
		});

		it('should set user and set auth checked true when login is fulfilled', function () {
				const testUser = {name:'name'}

				const action = {type: login.fulfilled.type, payload: {user: testUser,accessToken: 'Bearer token', refreshToken: 'refresh token'}};
				const state = reducer(initialState, action);

				expect(state).toEqual({...initialState, isAuthChecked: true, user: testUser});
		});

		it('should set user and set auth checked true when getUser is fulfilled', function () {
				const testUser = {name:'name'}

				const action = {type: getUser.fulfilled.type, payload: {user: testUser}};
				const state = reducer(initialState, action);

				expect(state).toEqual({...initialState, isAuthChecked: true, user: testUser});
		});

		it('should set auth checked false when getUser is rejected', function () {
				const action = {type: getUser.rejected.type};
				const state = reducer(initialState, action);

				expect(state).toEqual({...initialState, isAuthChecked: true});
		});

		it('should set user and set auth checked true when register is fulfilled', function () {
				const testUser = {name:'name'}

				const action = {type: register.fulfilled.type, payload: {user: testUser,accessToken: 'Bearer token', refreshToken: 'refresh token'}};
				const state = reducer(initialState, action);

				expect(state).toEqual({...initialState, isAuthChecked: true, user: testUser});
		});

		it('should set user when user edit is fulfilled', function () {
				const testUser = {name:'name'}

				const action = {type: editUser.fulfilled.type, payload: {user: testUser}};
				const state = reducer(initialState, action);

				expect(state).toEqual({...initialState, user: testUser});
		});

		it('should set user to initial when logout is fulfilled', function () {
				const action = {type: logout.fulfilled.type};
				const state = reducer(initialState, action);

				expect(state).toEqual({...initialState});
		});
})