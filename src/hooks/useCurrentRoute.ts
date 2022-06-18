import { useCurrentPath } from '~/hooks'

import { routes } from '~/routes'

export const useCurrentRoute = () => {
	const path = useCurrentPath()

	const route = routes.find((route) => route.path === path)

	if (!route) return routes[0]

	return route
}
