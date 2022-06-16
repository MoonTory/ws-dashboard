import React from 'react'
import ListIcon from '@mui/icons-material/List'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ConstructionIcon from '@mui/icons-material/Construction'

import { HomeView, EventsView, RuleBuilderView } from '~/views/lazy'

export interface AppRoute {
	name: string
	path: string
	icon: React.ReactNode | any
	element?: React.ReactNode | null
}

export const routes: AppRoute[] = [
	{
		name: 'Home',
		path: '/',
		icon: <DashboardIcon />,
		element: <HomeView />
	},
	{
		name: 'Events',
		path: '/events',
		icon: <ListIcon />,
		element: <EventsView />
	},
	{
		name: 'Rule Builder',
		path: '/rule-builder',
		icon: <ConstructionIcon />,
		element: <RuleBuilderView />
	}
]
