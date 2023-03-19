import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    bun: null,
    ingredients: []
}
export const constructorSlice = createSlice({
    name: 'constructor',
    initialState,
    reducers: {
        sortIngredients: (state, action) => {
            state.ingredients = action.payload
        },
        setBun: (state, action) => {
            state.bun = action.payload
        },
        addIngredient: (state, action) => {
            if(action.payload.type === 'bun')
                state.bun = action.payload
            else
                state.ingredients.push(action.payload)
        },
        deleteIngredient: (state, action) => {
            state.ingredients = state.ingredients.filter(el => el.key !== action.payload)
        },
    }
})

export const {sortIngredient, setBun, addIngredient, deleteIngredient} = constructorSlice.actions

export default constructorSlice.reducer