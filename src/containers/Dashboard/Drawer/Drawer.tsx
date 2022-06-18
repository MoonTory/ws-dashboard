import React from 'react'
import { useNavigate } from 'react-router-dom'
import { List, Divider, Toolbar, IconButton } from '@mui/material'
import { ChevronLeft as ChevronLeftIcon } from '@mui/icons-material'

import { DrawerItem } from './DrawerItem'

import { AppDrawer } from '~/components'
import { navItems, NavItem } from '~/routes/_nav'

const toolbarStyles = {
	px: [1],
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end'
}

export const Drawer: React.FC<{ open: boolean; toggle: () => void }> = ({ open, toggle }) => {
	const navigate = useNavigate()

	const onClick = (item: NavItem) => navigate(item.path)

	const mapDrawerItems = (nodes: NavItem[]) =>
		nodes.map((node, idx) => <DrawerItem key={idx} navItem={node} onClick={onClick} />)

	return (
		<AppDrawer variant="permanent" open={open}>
			<Toolbar sx={toolbarStyles}>
				<IconButton onClick={toggle} color="inherit">
					<ChevronLeftIcon />
				</IconButton>
			</Toolbar>
			<Divider />
			<List component="nav">{mapDrawerItems(navItems)}</List>
		</AppDrawer>
	)
}
