import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import ingredientsReducer from "./slices/ingredients";
import ingredientReducer from "./slices/ingredient";
import constructorReducer from "./slices/constructor";
import orderReducer from "./slices/order";
import userReducer from "./slices/user";
import passwordReducer from "./slices/password";

const rootReducer = combineReducers({
    burger_constructor: constructorReducer,
    ingredients: ingredientsReducer,
    ingredient: ingredientReducer,
    order: orderReducer,
    user: userReducer,
    password: passwordReducer,
});
export const mainStore = configureStore({
        reducer: rootReducer,
        devTools: true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    })

export type RootState = ReturnType<typeof mainStore.getState>;

export type AppDispatch = typeof mainStore.dispatch;