import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import ingredientsReducer from "./slices/ingredients";
import ingredientReducer from "./slices/ingredient";
import constructorReducer from "./slices/constructor";
import orderDetailsReducer from "./slices/order-details";
import userReducer from "./slices/user";
import passwordReducer from "./slices/password";
import orderReducer from './slices/order'

const rootReducer = combineReducers({
    burgerConstructor: constructorReducer,
    ingredients: ingredientsReducer,
    ingredient: ingredientReducer,
    orderDetails: orderDetailsReducer,
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