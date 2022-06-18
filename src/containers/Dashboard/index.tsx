import React from 'react'
import { Outlet } from 'react-router-dom'
import { Menu as MenuIcon } from '@mui/icons-material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { Box, Toolbar, Container, Typography, IconButton, CssBaseline } from '@mui/material'

import { Drawer } from './Drawer'

import { useCurrentRoute } from '~/hooks'
import { AppBar, Preloader } from '~/components'

const theme = createTheme()

export const Dashboard: React.FC = () => {
	const route = useCurrentRoute()

	const [open, setOpen] = React.useState(true)

	const toggleDrawer = () => setOpen(!open)

	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ display: 'flex' }}>
				<CssBaseline />
				<AppBar position="absolute" open={open}>
					<Toolbar sx={{ pr: '24px' }}>
						<IconButton
							edge="start"
							color="inherit"
							onClick={toggleDrawer}
							aria-label="open AppDrawer"
							sx={{ marginRight: '36px', ...(open && { display: 'none' }) }}
						>
							<MenuIcon />
						</IconButton>
						<Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
							{route.name}
						</Typography>
					</Toolbar>
				</AppBar>

				<Drawer open={open} toggle={toggleDrawer} />

				<Box
					component="main"
					sx={{
						flexGrow: 1,
						height: '100vh',
						overflow: 'auto',
						backgroundColor: (theme) =>
							theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900]
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
