import {createAsyncThunk} from "@reduxjs/toolkit";
import {request} from "../../utils/api";
import {IConstructorIngredient, IOrdersResponse, OrderStatus} from "../../utils/types";

const orderMock: IOrdersResponse = {
		"success": true,
		"orders": [
				{
						"ingredients": [
								"643d69a5c3f7b9001cfa093c",
								"643d69a5c3f7b9001cfa0941",
								"643d69a5c3f7b9001cfa093e",
								"643d69a5c3f7b9001cfa093e",
								"643d69a5c3f7b9001cfa0942",
								"643d69a5c3f7b9001cfa0942",
								"643d69a5c3f7b9001cfa0942",
								"643d69a5c3f7b9001cfa0940",
								"643d69a5c3f7b9001cfa093d",
								"643d69a5c3f7b9001cfa0947",
								"643d69a5c3f7b9001cfa094a"
						],
						"_id": "643d69a5c3f7b9001cfa093d",
						"status": OrderStatus.done,
						"number": 0,
						"createdAt": "2021-06-23T14:43:22.587Z",
						"updatedAt": "2021-06-23T14:43:22.603Z"
				},
				{
						"ingredients": [
								"643d69a5c3f7b9001cfa093c",
								"643d69a5c3f7b9001cfa0941",
								"643d69a5c3f7b9001cfa093e",
								"643d69a5c3f7b9001cfa093e",
								"643d69a5c3f7b9001cfa0942",
								"643d69a5c3f7b9001cfa0942",
								"643d69a5c3f7b9001cfa0942",
								"643d69a5c3f7b9001cfa0940",
								"643d69a5c3f7b9001cfa093d",
								"643d69a5c3f7b9001cfa0947",
								"643d69a5c3f7b9001cfa094a"
						],
						"_id": "643d69a5c3f7b9001cfa093b",
						"status": OrderStatus.done,
						"number": 0,
						"createdAt": "2021-06-23T14:43:22.587Z",
						"updatedAt": "2021-06-23T14:43:22.603Z"
				},
				{
						"ingredients": [
								"643d69a5c3f7b9001cfa093c",
								"643d69a5c3f7b9001cfa0941",
								"643d69a5c3f7b9001cfa093e",
								"643d69a5c3f7b9001cfa093e",
								"643d69a5c3f7b9001cfa0942",
								"643d69a5c3f7b9001cfa0942",
								"643d69a5c3f7b9001cfa0942",
								"643d69a5c3f7b9001cfa0940",
								"643d69a5c3f7b9001cfa093d",
								"643d69a5c3f7b9001cfa0947",
								"643d69a5c3f7b9001cfa094a"
						],
						"_id": "643d69a5c3f7b9001cfa093a",
						"status": OrderStatus.done,
						"number": 0,
						"createdAt": "2021-06-23T14:43:22.587Z",
						"updatedAt": "2021-06-23T14:43:22.603Z"
				},
				{
						"ingredients": [
								"643d69a5c3f7b9001cfa093c",
								"643d69a5c3f7b9001cfa0941",
								"643d69a5c3f7b9001cfa093e",
								"643d69a5c3f7b9001cfa093e",
								"643d69a5c3f7b9001cfa0942",
								"643d69a5c3f7b9001cfa0942",
								"643d69a5c3f7b9001cfa0942",
								"643d69a5c3f7b9001cfa0940",
								"643d69a5c3f7b9001cfa093d",
								"643d69a5c3f7b9001cfa0947",
								"643d69a5c3f7b9001cfa094a"
						],
						"_id": "643d69a5c3f7b9001cfa093e",
						"status": OrderStatus.done,
						"number": 0,
						"createdAt": "2021-06-23T14:43:22.587Z",
						"updatedAt": "2021-06-23T14:43:22.603Z"
				},
				{
						"ingredients": [
								"643d69a5c3f7b9001cfa093c",
								"643d69a5c3f7b9001cfa0941",
								"643d69a5c3f7b9001cfa093e",
								"643d69a5c3f7b9001cfa093e",
								"643d69a5c3f7b9001cfa0942",
								"643d69a5c3f7b9001cfa0942",
								"643d69a5c3f7b9001cfa0942",
								"643d69a5c3f7b9001cfa0940",
								"643d69a5c3f7b9001cfa093d",
								"643d69a5c3f7b9001cfa0947",
								"643d69a5c3f7b9001cfa094a"
						],
						"_id": "643d69a5c3f7b9001cfa093f",
						"status": OrderStatus.done,
						"number": 0,
						"createdAt": "2021-06-23T14:43:22.587Z",
						"updatedAt": "2021-06-23T14:43:22.603Z"
				}
		],
		"total": 1,
		"totalToday": 1
}

export const getAllOrders = createAsyncThunk(
		'orders/getAllOrdersStatus',
		async () => {
				return orderMock
		}
)
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





