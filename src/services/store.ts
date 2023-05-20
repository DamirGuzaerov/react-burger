import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import ingredientsReducer from "./slices/ingredients";
import constructorReducer from "./slices/constructor";
import orderDetailsReducer from "./slices/order-details";
import userReducer from "./slices/user";
import passwordReducer from "./slices/password";
import {ordersReducer} from './slices/orders/reducer';
import {socketMiddleware} from "./middleware/socket-middleware";
import {
    connect as OrdersWsConnect,
    disconnect as OrdersWsDisconnect,
    wsConnecting as OrdersWsConnecting,
    wsOpen as OrdersWsOpen,
    wsClose as OrdersWsClose,
    wsMessage as OrdersWsNessage,
    wsError as OrdersWsError
} from "./slices/orders/actions";

const wsActions = {
    wsConnect: OrdersWsConnect,
    wsDisconnect: OrdersWsDisconnect,
    wsConnecting: OrdersWsConnecting,
    onOpen: OrdersWsOpen,
    onClose: OrdersWsClose,
    onError: OrdersWsError,
    onMessage: OrdersWsNessage,
};

const rootReducer = combineReducers({
    burgerConstructor: constructorReducer,
    ingredients: ingredientsReducer,
    orderDetails: orderDetailsReducer,
    user: userReducer,
    password: passwordReducer,
    orders: ordersReducer
});

const ordersMiddleware = socketMiddleware(wsActions);
export const mainStore = configureStore({
        reducer: rootReducer,
        devTools: true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ordersMiddleware)
    })

export type RootState = ReturnType<typeof mainStore.getState>;

export type AppDispatch = typeof mainStore.dispatch;