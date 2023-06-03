import {createReducer} from "@reduxjs/toolkit";
import {IOrder, WebsocketStatus} from "../../../utils/types";
import {wsClose, wsConnecting, wsError, wsMessage, wsOpen} from "./actions";

export interface OrdersStore {
		status: WebsocketStatus,
		connectionError: string,
		orders: IOrder[],
		total: number,
		totalToday: number
}

const initialState: OrdersStore = {
		status: WebsocketStatus.OFFLINE,
		connectionError: '',
		orders: [],
		total: 0,
		totalToday: 0
};

export const ordersReducer = createReducer(initialState, (builder) => {
		builder
				.addCase(wsConnecting, (state) => {
						state.status = WebsocketStatus.CONNECTING;
				})
				.addCase(wsOpen, (state) => {
						state.status = WebsocketStatus.ONLINE;
						state.connectionError = '';
				})
				.addCase(wsClose, (state) => {
						state.status = WebsocketStatus.OFFLINE;
				})
				.addCase(wsMessage, (state, action) => {
						state.orders = action.payload.orders
						state.total = action.payload.total
						state.totalToday = action.payload.totalToday
				})
				.addCase(wsError, (state, action) => {
						state.connectionError = action.payload;
				})
})