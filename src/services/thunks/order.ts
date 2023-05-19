import {createAsyncThunk} from "@reduxjs/toolkit";
import {request} from "../../utils/api";
import {IConstructorIngredient} from "../../utils/types";

export const addOrder = createAsyncThunk(
		'orderDetails/postOrderStatus',
		async ({ingredients, bun}: { ingredients: IConstructorIngredient[], bun: IConstructorIngredient }) => {
				let ingredientIds = ingredients.map(el => el._id).concat([bun?._id, bun?._id])
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





