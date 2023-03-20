import {createAsyncThunk} from "@reduxjs/toolkit";
import {request} from "../../utils/api";

export const addOrder = createAsyncThunk(
    'order/postOrderStatus',
    async (arg) => {
        let ingredientIds = arg.ingredients.map(el => el._id).concat([arg.bun?._id, arg.bun?._id])
        return await request('api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({
                "ingredients": ingredientIds
            })
        })
    }
)





