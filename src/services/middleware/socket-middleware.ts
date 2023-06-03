import { ActionCreatorWithoutPayload, ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { Middleware } from 'redux';
import { RootState } from '../store';

export type TwsActionTypes = {
		wsConnect: ActionCreatorWithPayload<string>,
		wsDisconnect: ActionCreatorWithoutPayload,
		wsSendMessage?: ActionCreatorWithPayload<any>,
		wsConnecting: ActionCreatorWithoutPayload,
		onOpen: ActionCreatorWithoutPayload,
		onClose: ActionCreatorWithoutPayload,
		onError: ActionCreatorWithPayload<string>,
		onMessage: ActionCreatorWithPayload<any>,
}

export const socketMiddleware: Function = (wsActions: TwsActionTypes): Middleware<{}, RootState> => {
		return (store) => {
				let socket: WebSocket | null = null;
				let isConnected = false;
				let reconnectTimer = 0;
				let url = '';

				return next => action => {
						const { dispatch } = store;
						const { wsConnect, wsDisconnect, wsSendMessage, onOpen,
								onClose, onError, onMessage, wsConnecting } = wsActions;
						if (wsConnect.match(action)) {
								url = action.payload;
								socket = new WebSocket(url);
								isConnected = true;
								dispatch(wsConnecting());
						}

						if (socket) {
								socket.onopen = () => {
										dispatch(onOpen());
								};

								socket.onmessage = event => {
										const { data } = event;
										const parsedData = JSON.parse(data);
										dispatch(onMessage(parsedData));
								};

								socket.onclose = event => {
										if (event.code !== 1000) {
												dispatch(onError(event.code.toString()));
										}
										dispatch(onClose());

										if (isConnected) {
												dispatch(wsConnecting());
												reconnectTimer = window.setTimeout(() => {
														dispatch(wsConnect(url));
												}, 3000)
										}

								};

								if (wsSendMessage && wsSendMessage.match(action)) {
										socket.send(JSON.stringify(action.payload));
								}

								if (wsDisconnect.match(action)) {
										clearTimeout(reconnectTimer)
										isConnected = false;
										reconnectTimer = 0;
										socket.close(1000)
										dispatch(onClose());
								}
						}

						next(action);
				};
		};
};