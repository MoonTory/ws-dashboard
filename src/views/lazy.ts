import React from 'react'

export const HomeView = React.lazy(() => import('./Home'))
export const EventsView = React.lazy(() => import('./Events'))
export const RuleBuilderView = React.lazy(() => import('./RuleBuilder'))
export const RuleBuilderCreateView = React.lazy(() => import('./RuleBuilder/Create'))
export const SettingsView = React.lazy(() => import('./Settings'))
