import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    bun: null,
    ingredients: []
}
export const constructorSlice = createSlice({
    name: 'constructor',
    initialState,
    reducers: {
        sortIngredients: (state,action) => {
            state.ingredients = action.payload
        },
        setBun: (state,action) => {
            state.bun = action.payload
        },
        addIngredient: (state, action) => {
            state.ingredients.push(action.payload)
        }
    }
})

export const {sortIngredient, setBun, addIngredient} = constructorSlice.actions

export default constructorSlice.reducer