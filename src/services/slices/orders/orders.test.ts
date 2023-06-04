import {ordersReducer, initialState} from './reducer'
import {wsClose, wsConnecting, wsError, wsMessage, wsOpen} from "./actions";
import {IOrder, WebsocketStatus} from "../../../utils/types";

describe('Redux orders reducer', () => {
		it('should set ws status connecting when dispatch wsConnecting', function () {
				const state = ordersReducer(initialState, wsConnecting);
				expect(state).toEqual({...initialState, status: WebsocketStatus.CONNECTING});
		});

		it('should set ws status online when dispatch wsOpen', function () {
				const state = ordersReducer(initialState, wsOpen);

				expect(state).toEqual({...initialState, status: WebsocketStatus.ONLINE});
		});

		it('should set ws status offline when dispatch wsClose', function () {
				const state = ordersReducer(initialState, wsClose);

				expect(state).toEqual({...initialState, status: WebsocketStatus.OFFLINE});
		});

		it('should set data when dispatch wsMessage', function () {
				const testOrders: IOrder[] = [{'_id': '1'}] as IOrder[]
				const state = ordersReducer(initialState, wsMessage({orders: testOrders, total: 1, totalToday: 1, success: true}));

				expect(state).toEqual({...initialState, orders: testOrders, total: 1, totalToday: 1});
		});

		it('should set error when dispatch wsError', function () {
				const state = ordersReducer(initialState, wsError('Error'));

				expect(state).toEqual({...initialState, connectionError: 'Error'});
		});
})