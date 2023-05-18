import {RootState} from "../store";

export const getIngredients = (state: RootState) => state.ingredients.ingredients
export const getIngredientById = (state: RootState, id: string | undefined) => state.ingredients.ingredients.find(el => el._id === id)

export const getIngredientsByIds = (state: RootState, ids: string[]) => state.ingredients.ingredients.filter(ingredient => {
		return ids.includes(ingredient._id);
});