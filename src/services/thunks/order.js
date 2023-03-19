import {createAsyncThunk} from "@reduxjs/toolkit";
import {BASE_URL} from "../../utils/constants";

export const addOrder = createAsyncThunk(
    'order/postOrderStatus',
    async (arg, {rejectWithValue}) => {
        let ingredientIds = arg.ingredients.map(el => el._id).concat([arg.bun?._id, arg.bun?._id])
        try {
            let response = await fetch(`${BASE_URL}api/orders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify({
                    "ingredients": ingredientIds
                })
            })
            if(response.ok)
                return await response.json()
            else {
                let err = await response.json()
                await Promise.reject(err);
            }
        } catch (err) {
            console.error('fetch error', err)
            return rejectWithValue(err)
        }
    }
)





