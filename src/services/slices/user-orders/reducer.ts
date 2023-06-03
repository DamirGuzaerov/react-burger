import {createReducer} from "@reduxjs/toolkit";
import {IOrder, WebsocketStatus} from "../../../utils/types";
import {wsClose, wsConnecting, wsError, wsMessage, wsOpen} from "./actions";

export interface UserOrdersStore {
		status: WebsocketStatus,
		connectionError: string,
		orders: IOrder[],
		total: number,
		totalToday: number
}

const initialState: UserOrdersStore = {
		status: WebsocketStatus.OFFLINE,
		connectionError: '',
		orders: [],
		total: 0,
		totalToday: 0
};

export const userOrdersReducer = createReducer(initialState, (builder) => {
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
						state.orders = action.payload.orders.sort((a,b)=>b.number-a.number)
						state.total = action.payload.total
						state.totalToday = action.payload.totalToday
				})
				.addCase(wsError, (state, action) => {
						state.connectionError = action.payload;
				})
})