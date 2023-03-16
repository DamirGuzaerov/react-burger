import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    orderDetails: null
}

export const order = createSlice({
    name: 'order',
    initialState,
    reducers: {
        updateOrderDetails: (state, action) => {
            state.orderDetails = action.payload
        }
    }
})

export const {updateOrderDetails} = order.actions
export default order.reducer