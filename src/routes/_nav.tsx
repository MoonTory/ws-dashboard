import React from 'react'
import AddIcon from '@mui/icons-material/Add'
import ListIcon from '@mui/icons-material/List'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ConstructionIcon from '@mui/icons-material/Construction'
import ViewListIcon from '@mui/icons-material/ViewList'
import SettingsIcon from '@mui/icons-material/Settings'

export interface NavItem {
	name: string
	path: string
	children: NavItem[]
	icon?: React.ReactNode
	footer: boolean
}

export const navItems: NavItem[] = [
	{
		name: 'Home',
		path: '/',
		children: [],
		icon: <DashboardIcon />,
		footer: false
	},
	{
		name: 'Events',
		path: '/events',
		children: [],
		icon: <ListIcon />,
		footer: false
	},
	{
		name: 'Rule Builder',
		path: '/rule-builder',
		icon: <ConstructionIcon />,
		footer: false,
		children: [
			{
				children: [],
				name: 'Rules',
				icon: <ViewListIcon />,
				path: '/rule-builder',
				footer: false
			},
			{
				children: [],
				name: 'Create',
				icon: <AddIcon />,
				path: '/rule-builder/create',
				footer: false
			}
		]
	},
	{
		name: 'Settings',
		path: '/settings',
		children: [],
		icon: <SettingsIcon />,
		footer: true
	}
]
