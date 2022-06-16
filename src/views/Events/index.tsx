import React from 'react'
import { Grid, Paper, Button } from '@mui/material'

import { WebSocketContext } from '~/context'
import { DataTable } from '~/components'

const EventsView: React.FC = () => {
	const [data, setData] = React.useState<any[]>([])
	const [listenerId, setListenerId] = React.useState<string | null>(null)
	const { sendMessage, addListener, removeListener } = React.useContext(WebSocketContext)

	React.useEffect(() => {
		setListenerId(addListener((ev: MessageEvent) => setData(JSON.parse(ev.data))))

		return () => removeListener(listenerId !== null ? listenerId : '')
	}, [])

	return (
		<Grid container spacing={3}>
			<Grid item xs={12} md={8} lg={9}>
				<Paper>
					<Button size="small" onClick={() => sendMessage({ action: 'list' })}>
						Load List
					</Button>
					{data.length === 0 ? null : <DataTable data={data} />}
				</Paper>
			</Grid>
		</Grid>
	)
}

export default EventsView
