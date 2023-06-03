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

import {
    connect as UserOrdersWsConnect,
    disconnect as UserOrdersWsDisconnect,
    wsConnecting as UserOrdersWsConnecting,
    wsOpen as UserOrdersWsOpen,
    wsClose as UserOrdersWsClose,
    wsMessage as UserOrdersWsNessage,
    wsError as UserOrdersWsError
} from "./slices/user-orders/actions";
import {userOrdersReducer} from "./slices/user-orders/reducer";

const wsOrdersActions = {
    wsConnect: OrdersWsConnect,
    wsDisconnect: OrdersWsDisconnect,
    wsConnecting: OrdersWsConnecting,
    onOpen: OrdersWsOpen,
    onClose: OrdersWsClose,
    onError: OrdersWsError,
    onMessage: OrdersWsNessage,
};

const wsUserOrdersActions = {
    wsConnect: UserOrdersWsConnect,
    wsDisconnect: UserOrdersWsDisconnect,
    wsConnecting: UserOrdersWsConnecting,
    onOpen: UserOrdersWsOpen,
    onClose: UserOrdersWsClose,
    onError: UserOrdersWsError,
    onMessage: UserOrdersWsNessage,
};

const rootReducer = combineReducers({
    burgerConstructor: constructorReducer,
    ingredients: ingredientsReducer,
    orderDetails: orderDetailsReducer,
    user: userReducer,
    password: passwordReducer,
    orders: ordersReducer,
    userOrders: userOrdersReducer
});

const ordersMiddleware = socketMiddleware(wsOrdersActions);
const userOrdersMiddleware = socketMiddleware(wsUserOrdersActions);
export const mainStore = configureStore({
        reducer: rootReducer,
        devTools: true,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ordersMiddleware,userOrdersMiddleware)
    })

export type RootState = ReturnType<typeof mainStore.getState>;

export type AppDispatch = typeof mainStore.dispatch;