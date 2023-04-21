import {createSlice} from "@reduxjs/toolkit";
import {addOrder} from "../thunks/order";
import {IOrderDetails} from "../../utils/types";

interface IOrderSlice {
		orderDetails: IOrderDetails | null,
		requested: boolean,
		success: boolean,
		failed: boolean
}

const initialState: IOrderSlice = {
		orderDetails: null,
		requested: false,
		success: false,
		failed: false
}

export const order = createSlice({
		name: 'order',
		initialState,
		reducers: {},
		extraReducers: (builder) => {
				builder
						.addCase(addOrder.fulfilled, (state, action) => {
								state.requested = false
								state.success = true
								state.failed = false

								state.orderDetails = action.payload
						})
						.addCase(addOrder.pending, (state) => {
								state.requested = true
								state.success = false
								state.failed = false
						})
						.addCase(addOrder.rejected, (state) => {
								state.requested = false
								state.success = false
								state.failed = true
						})
		},
})

export default order.reducer