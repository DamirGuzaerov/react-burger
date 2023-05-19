import {createSlice} from "@reduxjs/toolkit";
import {IOrder} from "../../utils/types";

interface IOrderSlice {
		order: IOrder | null,
		requested: boolean,
		success: boolean,
		failed: boolean
}

const initialState: IOrderSlice = {
		order: null,
		requested: false,
		success: false,
		failed: false
}

export const orderSlice = createSlice({
		name: 'order',
		initialState,
		reducers: {
				setCurrentOrder: (state, action) => {
						state.order = action.payload
				},
				removeCurrentOrder: (state) => {
						state.order = null
				}
		},
})

export const {setCurrentOrder, removeCurrentOrder} = orderSlice.actions

export default orderSlice.reducer