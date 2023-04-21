import {RootState} from "../store";

export const getIngredients = (state: RootState) => state.ingredients.ingredients
export const getIngredientById = (state: RootState, id: string | undefined) => state.ingredients.ingredients.find(el => el._id === id)