import React from 'react'
import * as uuid from 'uuid'

import { useSession } from './useSession'
import { websocketReducer, initialState } from './ws.reducer'
import { IWebSocketContext, WebSocketActions, WebSocketListenerHandler } from './types'

export const WebSocketContext = React.createContext({} as IWebSocketContext)

export const WebSocketProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
	const [state, dispatch] = React.useReducer(websocketReducer, initialState)

	const { close, connect, sendMessage } = useSession(state, dispatch)

	const addListener = React.useCallback((handler: WebSocketListenerHandler) => {
		let id: string
		const newListeners = [...state.listeners]

		do {
			id = uuid.v4()
		} while (newListeners.map((x) => x.id).includes(id)) // avoid duplicates

		newListeners.push({ id, handler })

		dispatch({ type: WebSocketActions.ADD_LISTENER, payload: newListeners })

		return id
	}, [])

	const removeListener = React.useCallback((id: string) => {
		const newListeners = [...state.listeners]

		newListeners.splice(
			newListeners.findIndex((x) => x.id === id),
			1
		)

		dispatch({ type: WebSocketActions.REMOVE_LISTENER, payload: newListeners })
	}, [])

	return (
		<WebSocketContext.Provider value={{ state, connect, close, sendMessage, addListener, removeListener }}>
			{children}
		</WebSocketContext.Provider>
	)
}
