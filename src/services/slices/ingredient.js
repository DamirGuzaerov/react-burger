import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    currentIngredient: null,
}

export const ingredientSlice = createSlice({
    name: 'ingredient',
    initialState,
    reducers: {
        setCurrentIngredient: (state,action) => {
            state.currentIngredient = action.payload
        },
        removeCurrentIngredient: (state) => {
            state.currentIngredient = null
        }
    }
})

export const { setCurrentIngredient, removeCurrentIngredient } = ingredientSlice.actions
export default ingredientSlice.reducer