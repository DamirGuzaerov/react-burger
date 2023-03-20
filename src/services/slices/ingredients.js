import {createSlice} from "@reduxjs/toolkit";
import {getBurgerIngredients} from "../thunks/ingredients";

const initialState = {
    ingredients: [],
    ingredientsRequested: false,
    ingredientsSucceed: false,
    ingredientsFailed: false,
}

export const ingredientsSlice = createSlice({
    name: 'ingredients',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getBurgerIngredients.fulfilled, (state, action) => {
                state.ingredientsRequested = false
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