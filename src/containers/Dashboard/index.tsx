import React from 'react'
import { Outlet } from 'react-router-dom'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Menu as MenuIcon, Notifications as NotificationsIcon } from '@mui/icons-material'
import { Box, Badge, Toolbar, Container, Typography, IconButton, CssBaseline } from '@mui/material'

import { Drawer } from './Drawer'

import { routes } from '~/routes'
import { useCurrentPath } from '~/hooks'
import { AppBar, Preloader } from '~/components'

const mdTheme = createTheme()

export const Dashboard: React.FC = () => {
	const path = useCurrentPath()

	const [open, setOpen] = React.useState(true)
	const toggle = () => setOpen(!open)

	const currentRoute = () => {
		const route = routes.find((route) => route.path === path)

		if (!route) return routes[0]

		return route
	}

	return (
		<ThemeProvider theme={mdTheme}>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<AppBar position="absolute" open={open}>
					<Toolbar sx={{ pr: '24px' }}>
						<IconButton
							edge="start"
							color="inherit"
							onClick={toggle}
							aria-label="open AppDrawer"
							sx={{ marginRight: '36px', ...(open && { display: 'none' }) }}
						>
							<MenuIcon />
						</IconButton>
						<Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
							{currentRoute().name}
						</Typography>
						<IconButton color="inherit">
							<Badge badgeContent={4} color="secondary">
								<NotificationsIcon />
							</Badge>
						</IconButton>
					</Toolbar>
				</AppBar>

				<Drawer open={open} toggle={toggle} />

				<Box
					component="main"
					sx={{
						backgroundColor: (theme) =>
							theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
						flexGrow: 1,
						height: '100vh',
						overflow: 'auto'
					}}
				>
					<Toolbar />
					<Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
						<React.Suspense fallback={<Preloader />}>
							<Outlet />
						</React.Suspense>
					</Container>
				</Box>
			</Box>
		</ThemeProvider>
	)
}

export default Dashboard
