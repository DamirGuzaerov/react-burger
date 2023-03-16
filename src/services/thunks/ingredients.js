import {createAsyncThunk} from "@reduxjs/toolkit";
import {BASE_URL} from "../../utils/constants";

export const getBurgerIngredients = createAsyncThunk(
    'ingredients/getBurgerIngredientsStatus',
    async () => {
        const response = await fetch(`${BASE_URL}api/ingredients`)
        return await response.json()
    }
)




























































































































































































