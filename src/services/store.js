import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import ingredientsReducer from "./slices/ingredients";
import ingredientReducer from "./slices/ingredient";
import constructorReducer from "./slices/constructor";
import orderReducer from "./slices/order";

const rootReducer = combineReducers({
    burger_constructor: constructorReducer,
    ingredients: ingredientsReducer,
    ingredient: ingredientReducer,
    order: orderReducer,
});
export const mainStore = configureStore({
        reducer: rootReducer,
        devTools: true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    })
