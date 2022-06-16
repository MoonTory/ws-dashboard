import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { routes } from './_routes'

const Dashboard = React.lazy(() => import('~/containers/Dashboard'))

export const AppRouter = () => {
	return (
		<React.Fragment>
			<Router>
				<Routes>
					<Route path="/" element={<Dashboard />}>
						{routes.map(({ path, element }, idx) => (
							<Route key={idx} path={path} element={element} />
						))}
					</Route>
				</Routes>
			</Router>
		</React.Fragment>
	)
}
