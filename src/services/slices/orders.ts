import {createSlice} from "@reduxjs/toolkit";
import {IOrder} from "../../utils/types";
import {getAllOrders} from "../thunks/order";

interface IIngredientsSlice{
    orders: IOrder[],
    requested: boolean,
    succeed: boolean,
    failed: boolean,
}

const initialState: IIngredientsSlice = {
    orders: [],
    requested: false,
    succeed: false,
    failed: false,
}

export const ordersSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllOrders.fulfilled, (state, action) => {
                state.requested = false
                state.orders = action.payload.orders
            })
            .addCase(getAllOrders.pending, (state) => {
                state.requested = true
            })
            .addCase(getAllOrders.rejected, (state) => {
                state.requested = false
                state.failed = true
            })
    },
})

export default ordersSlice.reducer