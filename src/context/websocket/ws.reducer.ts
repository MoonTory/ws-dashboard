import React from 'react'

import { WebSockerReducerAction, WebSocketActions, WebSocketState, WebSocketStatus } from './types'

export const initialState: WebSocketState = {
	listeners: [],
	status: WebSocketStatus.CLOSED
}

export const websocketReducer: React.Reducer<WebSocketState, WebSockerReducerAction> = (state, action) => {
	switch (action.type) {
		case WebSocketActions.UPDATE_CONN_STATUS:
			return {
				...state,
				status: action.payload
			}

		case WebSocketActions.ADD_LISTENER:
			return {
				...state,
				listeners: action.payload
			}

		case WebSocketActions.REMOVE_LISTENER:
			return {
				...state,
				listeners: action.payload
			}

		default:
			return state
	}
}
