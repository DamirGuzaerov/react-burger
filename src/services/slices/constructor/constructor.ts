import {createSlice} from "@reduxjs/toolkit";
import {IConstructorIngredient} from "../../../utils/types";

export interface IConstructorSlice {
    bun: IConstructorIngredient | null,
    ingredients: IConstructorIngredient[]
}
const initialState: IConstructorSlice = {
    bun: null,
    ingredients: []
}
export const constructorSlice = createSlice({
    name: 'constructor',
    initialState,
    reducers: {
        sortIngredients: (state, action) => {
            state.ingredients.splice(
                action.payload.toIndex,
                0,
                state.ingredients.splice(action.payload.fromIndex, 1)[0]);
        },
        addIngredient: (state, action) => {
            if (action.payload.type === 'bun')
                state.bun = action.payload
            else
                state.ingredients.push(action.payload)
        },
        deleteIngredient: (state, action) => {
            state.ingredients = state.ingredients.filter(el => el.key !== action.payload)
        },
        clearConstructor: (state) => {
            state.bun = initialState.bun
            state.ingredients = initialState.ingredients
        }
    }
})

export const {sortIngredients, addIngredient, deleteIngredient, clearConstructor} = constructorSlice.actions

export default constructorSlice.reducer