import { createAction } from '@reduxjs/toolkit';
import {IOrderWsMessage} from "../../../utils/types";

export const connect = createAction<string, 'USER_ORDERS_CONNECT'>('USER_ORDERS_CONNECT');
export const disconnect = createAction('USER_ORDERS_DISCONNECT');
export const wsOpen = createAction('USER_ORDERS_WS_OPEN');
export const wsClose = createAction('USER_ORDERS_WS_CLOSE');
export const wsMessage = createAction<IOrderWsMessage, 'USER_ORDERS_WS_MESSAGE'>('USER_ORDERS_WS_MESSAGE');
export const wsConnecting = createAction('USER_ORDERS_WS_CONNECTING');
export const wsError = createAction<string, 'USER_ORDERS_WS_ERROR'>('USER_ORDERS_WS_ERROR');
