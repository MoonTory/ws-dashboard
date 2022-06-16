import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft as ChevronLeftIcon } from '@mui/icons-material'
import { Divider, IconButton, List, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material'

import { routes } from '~/routes'
import { AppDrawer } from '~/components'

export const Drawer: React.FC<{ open: boolean; toggle: () => void }> = ({ open, toggle }) => {
	const navigate = useNavigate()

	return (
		<AppDrawer variant="permanent" open={open}>
			<Toolbar
				sx={{
					px: [1],
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'flex-end'
				}}
			>
				<IconButton onClick={toggle}>
					<ChevronLeftIcon />
				</IconButton>
			</Toolbar>
			<Divider />
			<List component="nav">
				{routes.map((route, idx) => (
					<React.Fragment key={idx}>
						<ListItemButton onClick={() => navigate(route.path)}>
							<ListItemIcon>{route.icon}</ListItemIcon>
							<ListItemText primary={route.name} />
						</ListItemButton>
					</React.Fragment>
				))}
			</List>
		</AppDrawer>
	)
}
