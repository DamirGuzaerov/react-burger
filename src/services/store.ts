import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import ingredientsReducer from "./slices/ingredients";
import constructorReducer from "./slices/constructor";
import orderDetailsReducer from "./slices/order-details";
import userReducer from "./slices/user";
import passwordReducer from "./slices/password";
import ordersReducer from './slices/orders';

const rootReducer = combineReducers({
    burgerConstructor: constructorReducer,
    ingredients: ingredientsReducer,
    orderDetails: orderDetailsReducer,
    user: userReducer,
    password: passwordReducer,
    orders: ordersReducer
});
export const mainStore = configureStore({
        reducer: rootReducer,
        devTools: true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    })

export type RootState = ReturnType<typeof mainStore.getState>;

export type AppDispatch = typeof mainStore.dispatch;