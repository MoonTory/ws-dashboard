import React from 'react'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { List, Collapse, ListItemIcon, ListItemText, ListItemButton } from '@mui/material'

import { NavItem } from '~/routes/_nav'
import { useCurrentRoute } from '~/hooks'

const footerStyles = {
	position: 'fixed',
	bottom: 0,
	textAlign: 'center',
	paddingBottom: 10
}

interface DrawerItemProps {
	navItem: NavItem
	onClick: (item: NavItem) => void
}

export const DrawerItem: React.FC<DrawerItemProps> = ({ navItem, onClick }) => {
	const [open, setOpen] = React.useState(false)

	const route = useCurrentRoute()

	const toggle = () => setOpen(!open)

	const hasChildren = () => navItem.children.length > 0

	const isSelected = (item: NavItem) => route.path === item.path

	return (
		<React.Fragment>
			<ListItemButton
				sx={navItem.footer ? { ...footerStyles } : {}}
				// styles={}
				onClick={toggle}
				selected={isSelected(navItem) && !hasChildren()}
			>
				<ListItemIcon>{navItem.icon}</ListItemIcon>
				<ListItemText primary={navItem.name} />
				{hasChildren() ? open ? <ExpandLess /> : <ExpandMore /> : null}
			</ListItemButton>
			{hasChildren() &&
				navItem.children.map((child, idx) => (
					<Collapse key={idx} in={open} timeout="auto" unmountOnExit>
						<List component="div" disablePadding>
							<ListItemButton selected={isSelected(child)} sx={{ pl: 4 }} onClick={() => onClick(child)}>
								<ListItemIcon>{child.icon}</ListItemIcon>
								<ListItemText primary={child.name} />
							</ListItemButton>
						</List>
					</Collapse>
				))}
		</React.Fragment>
	)
}
