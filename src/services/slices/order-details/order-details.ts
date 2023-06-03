import {createSlice} from "@reduxjs/toolkit";
import {addOrder} from "../../thunks/order/order";
import {IOrderDetails} from "../../../utils/types";

export interface IOrderDetailsSlice {
		orderDetails: IOrderDetails | null,
		requested: boolean,
		success: boolean,
		failed: boolean
}

const initialState: IOrderDetailsSlice = {
		orderDetails: null,
		requested: false,
		success: false,
		failed: false
}

export const orderDetails = createSlice({
		name: 'orderDetails',
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

export default orderDetails.reducer

