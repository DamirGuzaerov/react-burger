import reducer, {IOrderDetailsSlice} from './order-details'
import {addOrder} from "../../thunks/order/order";
import {orderDetailsMock} from "../../../mocks/order-details-mock";

describe('Redux order details reducer', () => {
		const initialState: IOrderDetailsSlice = {
				orderDetails: null,
				requested: false,
				success: false,
				failed: false
		}

		it('should set fetching true when add order is pending', function () {
				const action = {type: addOrder.pending.type};
				const state = reducer(initialState, action);

				expect(state).toEqual({...initialState, requested: true});
		});

		it('should set fetching false and success when add order is fulfilled', function () {
				const action = {type: addOrder.fulfilled.type, payload: orderDetailsMock};
				const state = reducer(initialState, action);

				expect(state).toEqual({...initialState, orderDetails: orderDetailsMock, requested: false, success: true});
		});

		it('should set fetching false and failed true when add order is rejected', function () {
				const action = {type: addOrder.rejected.type};
				const state = reducer(initialState, action);

				expect(state).toEqual({...initialState, requested: false, failed: true});
		});
})