export const getIngredients = (state) => state.ingredients.ingredients
export const getIngredientById = (state,id) => state.ingredients.ingredients.find(el=>el._id === id)