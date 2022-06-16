import React from 'react'

import { AppRouter } from '~/routes'
import { Preloader } from '~/components'
import { WebSocketProvider, RuleBuilderProvider } from '~/context'

export const App: React.FC = () => {
	return (
		<React.Suspense fallback={<Preloader />}>
			<WebSocketProvider>
				<RuleBuilderProvider>
					<AppRouter />
				</RuleBuilderProvider>
			</WebSocketProvider>
		</React.Suspense>
	)
}
