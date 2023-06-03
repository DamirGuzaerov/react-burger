import {createAsyncThunk} from "@reduxjs/toolkit";
import {fetchWithRefresh} from "../../../utils/api";
import {IConstructorIngredient} from "../../../utils/types";

export const addOrder = createAsyncThunk(
		'orderDetails/postOrderStatus',
		async ({ingredients, bun}: { ingredients: IConstructorIngredient[], bun: IConstructorIngredient }) => {
				let ingredientIds = ingredients.map(el => el._id).concat([bun?._id, bun?._id])
				let token = localStorage.getItem("accessToken")
				return await fetchWithRefresh('api/orders', {
						method: 'POST',
						headers: {
								'Content-Type': 'application/json;charset=utf-8',
								authorization: `Bearer ${token}`
						},
						body: JSON.stringify({
								"ingredients": ingredientIds
						})
				})
		}
)





