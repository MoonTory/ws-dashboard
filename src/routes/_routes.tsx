import React from 'react'

import { HomeView, EventsView, RuleBuilderView, RuleBuilderCreateView, SettingsView } from '~/views/lazy'
export interface AppRoute {
	name: string
	path: string
	element?: React.ReactNode | null
}

export const routes: AppRoute[] = [
	{
		name: 'Home',
		path: '/',
		element: <HomeView />
	},
	{
		name: 'Events',
		path: '/events',
		element: <EventsView />
	},
	{
		name: 'Rule Builder',
		path: '/rule-builder',
		element: <RuleBuilderView />
	},
	{
		name: 'Rule Builder',
		path: '/rule-builder/create',
		element: <RuleBuilderCreateView />
	},
	{
		name: 'Settings',
		path: '/settings',
		element: <SettingsView />
	}
]
