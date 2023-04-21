import {createSlice} from "@reduxjs/toolkit";
import {IIngredient} from "../../utils/types";

interface IIngredientSlice {
		currentIngredient: IIngredient | null,
}

const initialState: IIngredientSlice = {
		currentIngredient: null,
}

export const ingredientSlice = createSlice({
		name: 'ingredient',
		initialState,
		reducers: {
				setCurrentIngredient: (state, action) => {
						state.currentIngredient = action.payload
				},
				removeCurrentIngredient: (state) => {
						state.currentIngredient = null
				}
		}
})

export const {setCurrentIngredient, removeCurrentIngredient} = ingredientSlice.actions
export default ingredientSlice.reducer