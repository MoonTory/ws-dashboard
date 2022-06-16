import React from 'react'

import { WebSocketState, WebSockerReducerAction, WebSocketActions, SessionHook, WebSocketStatus } from './types'

export const useSession = (state: WebSocketState, dispatch: React.Dispatch<WebSockerReducerAction>): SessionHook => {
	let reconnInterval = 250 // in ms

	const [connURL, setConnURL] = React.useState<string>('')
	const [session, setSession] = React.useState(null as unknown as WebSocket)

	const connect = React.useCallback((url: string) => {
		dispatch({ type: WebSocketActions.UPDATE_CONN_STATUS, payload: WebSocketStatus.CONNECTING })

		setConnURL(url)
		setSession(new WebSocket(url))
	}, [])

	const sendMessage = <T extends any>(args: T) => {
		if (!session || session.readyState === session.CLOSED || session.readyState === session.CLOSING) return
		session.send(JSON.stringify(args))
	}

	const close = React.useCallback(() => {
		if (session.readyState === session.OPEN) session.close(1001)
	}, [session])

	const reconnect = React.useCallback((reconnectionInterval: number) => {
		const MAX_CONN_TIMEOUT = 10000
		setTimeout(() => connect(connURL), Math.min(MAX_CONN_TIMEOUT, reconnectionInterval))
	}, [])

	const onClose = ({ code }: CloseEvent) => {
		switch (code) {
			case 1000:
				console.debug('Websocket closed normally')
				break

			default:
				reconnInterval += reconnInterval
				reconnect(reconnInterval)
				break
		}

		dispatch({ type: WebSocketActions.UPDATE_CONN_STATUS, payload: WebSocketStatus.CLOSED })
	}

	const onOpen = () => dispatch({ type: WebSocketActions.UPDATE_CONN_STATUS, payload: WebSocketStatus.OPEN })

	const onMessage = (ev: MessageEvent<any>) => state.listeners.forEach((x) => x.handler(ev))

	const updateOpenHandler = () => {
		if (!session) return
		session.addEventListener('open', onOpen)
		return () => session.removeEventListener('open', onOpen)
	}

	const updateMessageHandler = () => {
		if (!session) return
		session.addEventListener('message', onMessage)
		return () => session.removeEventListener('message', onMessage)
	}

	const updateCloseHandler = () => {
		if (!session) return
		session.addEventListener('close', onClose)
		return () => session.removeEventListener('close', onClose)
	}

	React.useEffect(updateOpenHandler, [session, onOpen])
	React.useEffect(updateCloseHandler, [session, onClose])
	React.useEffect(updateMessageHandler, [session, onMessage, state.listeners])

	return { connect, sendMessage, close }
}
