import { matchRoutes, useLocation } from 'react-router-dom'

import { routes } from '~/routes'

export const useCurrentPath = (): string => {
	const location = useLocation()
	const matches = matchRoutes(routes, location)

	if (!matches || matches.length === 0) return '/'

	const [{ route }] = matches

	return route.path as string
}
