import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import ingredientsReducer from "./slices/ingredients";
import ingredientReducer from "./slices/ingredient";
import constructorReducer from "./slices/constructor";
import orderReducer from "./slices/order";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    ingredient: ingredientReducer,
    constructor: constructorReducer,
    order: orderReducer,
});
export const mainStore = configureStore({
        reducer: rootReducer,
        devTools: true,
        middleware: [thunk]
    })
