import {createSlice} from "@reduxjs/toolkit";
import {getBurgerIngredients} from "../../thunks/ingredients/ingredients";
import {IIngredient} from "../../../utils/types";

export interface IIngredientsSlice{
    ingredients: IIngredient[],
    ingredientsRequested: boolean,
    ingredientsSucceed: boolean,
    ingredientsFailed: boolean,
}

const initialState: IIngredientsSlice = {
    ingredients: [],
    ingredientsRequested: false,
    ingredientsSucceed: false,
    ingredientsFailed: false,
}

export const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getBurgerIngredients.fulfilled, (state, action) => {
                state.ingredientsRequested = false
                state.ingredientsSucceed = true
                state.ingredients = action.payload.data
            })
            .addCase(getBurgerIngredients.pending, (state) => {
                state.ingredientsRequested = true
            })
            .addCase(getBurgerIngredients.rejected, (state) => {
                state.ingredientsRequested = false
                state.ingredientsFailed = true
            })
    },
})

export default ingredientsSlice.reducer