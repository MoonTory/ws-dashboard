import { ReducerAction } from '~/typings'

export enum WebSocketStatus {
	OPEN = 'OPEN',
	CLOSED = 'CLOSED',
	CONNECTING = 'CONNECTING'
}

export interface IWebSocketContext {
	state: WebSocketState
	close: () => void
	connect: (url: string) => void
	removeListener: (id: string) => void
	sendMessage: <T extends any>(args: T) => void
	addListener: (handler: WebSocketListenerHandler) => string
}

export enum WebSocketActions {
	ADD_LISTENER = 'ADD_LISTENER',
	REMOVE_LISTENER = 'REMOVE_LISTENER',
	UPDATE_CONN_STATUS = 'UPDATE_CONN_STATUS'
}

export type WebSockerReducerAction = ReducerAction<any, WebSocketActions>

export interface WebSocketState {
	status: WebSocketStatus
	listeners: WebSocketListener[]
}

export type SessionHook = {
	close: () => void
	connect: (url: string) => void
	sendMessage: <T extends any>(args: T) => void
}

export type WebSocketListenerHandler = (ev: MessageEvent) => void

export type WebSocketListener = {
	id: string
	handler: WebSocketListenerHandler
}
